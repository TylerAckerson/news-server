package com.tackerson.newsservice.news_api

import akka.http.scaladsl.Http
import akka.http.scaladsl.model.{HttpRequest, HttpResponse}

import scala.concurrent.Future

/**
  * Created by tackerson on 4/7/17.
  */
object Articles extends NewsApi {

  def articlesBySource(source: Source): Future[HttpResponse] =
    Http().singleRequest(HttpRequest(uri = s"$baseArticleUri&source=$source"))

}
