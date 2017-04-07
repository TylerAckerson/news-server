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
  val baseUri = "https://newsapi.org/v1"
  val baseArticleUri: String = resourceUri(baseUri, "articles", newsApiKey)
  val baseSourceUri: String = resourceUri(baseUri, "sources", newsApiKey)

  def resourceUri(base: String, resource: String, key: String): String =
    s"$base/$resource/?apikey=$key"

  def allSources: Future[HttpResponse] =
    Http().singleRequest(HttpRequest(uri = baseSourceUri))

  def sources(language: Option[Language], category: Option[Category]): Future[HttpResponse] = {
    Http().singleRequest(HttpRequest(uri = buildSourcesUrl(baseSourceUri, language, category)))
  }

  def buildSourcesUrl(uri: String, language: Option[Language], category: Option[Category]): Uri = {
    val langParams = buildParams("language", language)
    val catParams = buildParams("category", category)
    val params = langParams.getOrElse("").concat(catParams.getOrElse(""))

    Uri(uri + params)
  }

  def buildParams(field: String, value: Option[String]): Option[String] =
    value.map(value => s"&$field=$value")

  def articlesBySource(source: Source): Future[HttpResponse] =
    Http().singleRequest(HttpRequest(uri = s"$baseArticleUri&source=$source"))

}