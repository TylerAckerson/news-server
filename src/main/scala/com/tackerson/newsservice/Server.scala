package com.tackerson.newsservice

import java.nio.file.{Files, Paths}

import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.model.{ContentTypes, HttpEntity, MediaTypes}
import akka.http.scaladsl.server.Directives._
import akka.stream.ActorMaterializer

import scala.io.StdIn

/**
  * Created by tackerson on 2/20/17.
  */
object Server  {

  def main(args: Array[String]) {
    implicit val system = ActorSystem()
    implicit val materializer = ActorMaterializer()
    implicit val executionContext = system.dispatcher

// TODO: figure out how to extract route params. Example:
//    val route =
//      parameters('color, 'backgroundColor.?) { (color, backgroundColor) =>
//        val backgroundStr = backgroundColor.getOrElse("<undefined>")
//        complete(s"The color is '$color' and the background is '$backgroundStr'")
//      }

    val route =
      get {
        pathSingleSlash {
          val workingDirectory = System.getProperty("user.dir")
          val fullPath = Paths.get(workingDirectory + "/client/index.html")
          val byteArray = Files.readAllBytes(fullPath)
          complete(HttpEntity(ContentTypes.`text/html(UTF-8)`, byteArray))
        } ~
          path("sources") {
            complete(NewsApi.newsResponse(category = "general"))
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