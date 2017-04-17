package com.tackerson.newsservice.news_api

import akka.actor.Status.{Failure, Success}
import akka.http.scaladsl.Http
import akka.http.scaladsl.model.{HttpRequest, HttpResponse, Uri}
import scala.concurrent.{ExecutionContext, Future}

/**
  * Created by tackerson on 4/7/17.
  */
object Sources extends NewsApi {

  def sources(language: Option[Language] = None, category: Option[Category] = None): Future[HttpResponse] = {
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
}
