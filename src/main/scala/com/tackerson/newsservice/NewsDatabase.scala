package com.tackerson.newsservice

import java.net.URI

import com.tackerson.newsservice.tables._
import slick.driver.H2Driver.api._

import scala.concurrent.ExecutionContext.Implicits.global

/**
  * Created by tackerson on 3/5/17.
  */

class NewsDatabase {
  val newsdb: Database = Database.forConfig("h2mem1")
  val sources: TableQuery[Sources]  = SourceTable.sources

  try {

    val setup = DBIO.seq(
      // Create the tables, including primary and foreign keys
      sources.schema.create,

      sources ++= Seq(
        ("epsn", "ESPN: Sports", "espn descr", "http://www.espn.com", "sport", "en", "usa", "http://www.google.com"),
        ("epsn2", "ESPN: Sports", "espn descr", "http://www.espn.com", "sport", "en", "usa", "http://www.google.com")
      )
    )

    val setupFuture = newsdb.run(setup)

  } finally newsdb.close

  val result = sources.result
}