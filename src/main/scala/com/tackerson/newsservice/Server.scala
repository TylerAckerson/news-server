package com.tackerson.newsservice

import java.nio.file.{Files, Paths}

import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.model.{ContentTypes, HttpEntity, StatusCodes}
import akka.http.scaladsl.server.Directives._
import akka.stream.ActorMaterializer
import com.tackerson.newsservice.NewsApi.{Category, Language}
import scala.concurrent.ExecutionContext
import scala.io.StdIn

/**
  * Created by tackerson on 2/20/17.
  */

object Server extends App {

  override def main(args: Array[String]) {
    implicit val system = ActorSystem()
    implicit val materializer = ActorMaterializer()
    implicit val executor: ExecutionContext = system.dispatcher

    val route =
      get {
        pathEndOrSingleSlash {
          val workingDirectory = System.getProperty("user.dir")
          val fullPath = Paths.get(workingDirectory + "/client/index.html")
          val byteArray = Files.readAllBytes(fullPath)
          complete(HttpEntity(ContentTypes.`text/html(UTF-8)`, byteArray))
        } ~
          redirectToNoTrailingSlashIfPresent(StatusCodes.MovedPermanently) {
            pathPrefix("sources") {
              pathEnd {
                parameters('language.as[Language].?, 'category.as[Category].?) { (language, category) =>
                  complete(NewsApi.sources(language, category))
                }
              } ~
                path(Segment / "articles") { source =>
                  complete(NewsApi.articlesBySource(source))
                } ~
                  path(Segment) { source =>
                    redirect(source + "/articles", StatusCodes.PermanentRedirect)
                  }
            } ~
              pathPrefix("filters") {
                pathEnd {
                  complete("filters")
                }
              }
          }
      }

    val bindingFuture = Http().bindAndHandle(route, "localhost", 8080)
    println(s"Server online at http://localhost:8080/\nPress RETURN to stop...")

    StdIn.readLine() // let it run until user presses return
    bindingFuture
      .flatMap(_.unbind()) // trigger unbinding from the port
      .onComplete(_ ⇒ system.terminate()) // and shutdown when done
  }
}