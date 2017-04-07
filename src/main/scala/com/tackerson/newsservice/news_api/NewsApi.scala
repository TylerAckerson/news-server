package com.tackerson.newsservice.news_api

import akka.actor.ActorSystem
import akka.stream.ActorMaterializer

/**
  * Created by tackerson on 2/20/17.
  */
trait NewsApi {
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
}