package com.tackerson.newsservice

import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.model._
import akka.stream.ActorMaterializer

import scala.concurrent.Future

/**
  * Created by tackerson on 2/20/17.
  */
object NewsApi {
  implicit val system = ActorSystem()
  implicit val materializer = ActorMaterializer()

  type Language = String
  type Category = String

  val newsApiKey: String = System.getenv("NEWS_API_KEY")
  val baseUrl: String = s"https://newsapi.org/v1/sources/?apikey=$newsApiKey"

  def newsResponse(language: Language = "en", category: Category = "general"): Future[HttpResponse] =
    Http().singleRequest(HttpRequest(uri = s"$baseUrl&language=$language&category=$category"))

}
