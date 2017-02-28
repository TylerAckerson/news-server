package com.tackerson.newsservice

import akka.actor.ActorSystem
import akka.actor.Status.{Failure, Success}
import akka.http.scaladsl.Http
import akka.http.scaladsl.model._
import akka.stream.ActorMaterializer
import scala.concurrent.ExecutionContext.Implicits.global


import scala.concurrent.Future

/**
  * Created by tackerson on 2/20/17.
  */
object NewsApi {
  implicit val system = ActorSystem()
  implicit val materializer = ActorMaterializer()

  type Language = String
  type Category = String
  type Source = String

  val newsApiKey: String = System.getenv("NEWS_API_KEY")
  val baseSourceUrl: String = s"https://newsapi.org/v1/sources/?apikey=$newsApiKey"
  val baseArticleUrl: String = s"https://newsapi.org/v1/articles/?apikey=$newsApiKey"

  def allSources: Future[HttpResponse] =
    Http().singleRequest(HttpRequest(uri = baseSourceUrl))

  def sources(language: Language, category: Category): Future[HttpResponse] =
    Http().singleRequest(HttpRequest(uri = s"$baseSourceUrl&language=$language&category=$category"))

  def articlesBySource(source: Source): Future[HttpResponse] =
    Http().singleRequest(HttpRequest(uri = s"$baseArticleUrl&source=$source"))

  def categoryFilters: String = {
//    val f = allSources
//    f onSuccess {
//      case resp => resp.toString
//    }
//    f onFailure {
//      case t => t.toString
//    }
//    println(filters)
    //    List("sport", "general")
    ""
  }

}
