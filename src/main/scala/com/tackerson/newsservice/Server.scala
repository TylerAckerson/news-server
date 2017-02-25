package com.tackerson.newsservice

import java.nio.file.{Files, Paths}

import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.model.{ContentTypes, HttpEntity, StatusCodes}
import akka.http.scaladsl.server.Directives._
import akka.stream.ActorMaterializer
import com.tackerson.newsservice.NewsApi.{Category, Language}

import scala.io.StdIn

/**
  * Created by tackerson on 2/20/17.
  */
object Server  {

  def main(args: Array[String]) {
    implicit val system = ActorSystem()
    implicit val materializer = ActorMaterializer()
    implicit val executionContext = system.dispatcher

    val route =
      get {
        pathEndOrSingleSlash {
          val workingDirectory = System.getProperty("user.dir")
          val fullPath = Paths.get(workingDirectory + "/client/index.html")
          val byteArray = Files.readAllBytes(fullPath)
          complete(HttpEntity(ContentTypes.`text/html(UTF-8)`, byteArray))
        } ~
          redirectToNoTrailingSlashIfPresent(StatusCodes.MovedPermanently) {
            path("sources") {
              parameters('language.as[Language] ? "en", 'category.as[Category] ? "general") { (language, category) =>
                complete(NewsApi.sources(language, category))
              }
            } ~
//            ~
//              path("sources" / Segment) { source =>
                // TODO: redirect to /articeles
                // complete(redirect(s"/sources/${source}/articles"))
//              } ~
          // TODO: seems redundant. Can this be nested?
              path("sources" / Segment / "articles") { source =>
                complete(NewsApi.articlesBySource(source))
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