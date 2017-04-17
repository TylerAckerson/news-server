package com.tackerson.newsservice.tables

import java.net.URI

import slick.driver.H2Driver.api._

import scala.concurrent.{Await, ExecutionContext, Future}
import scala.concurrent.ExecutionContext.Implicits.global
import slick.driver.H2Driver


/**
  * Created by tackerson on 3/5/17.
  */


trait SourcesTable {
  val db = Database.forConfig("h2mem1")

  class Sources(tag: Tag) extends Table[(String, String, String, String, String, String, String, String)](tag, "SOURCES") {
    def id = column[String]("SOURCE_ID", O.PrimaryKey)
    def name = column[String]("SOURCE_NAME")
    def description = column[String]("DESCRIPTION")
    def url = column[String]("URL")
    def category = column[String]("CATEGORY")
    def language = column[String]("LANGUAGE")
    def country = column[String]("COUNTRY")
    def logoUrl = column[String]("LOGO_URL")
    // Every table needs a * projection with the same type as the table's type parameter
    def * = (id, name, description, url, category, language, country, logoUrl)
  }

  val sources: TableQuery[Sources] = TableQuery[Sources]

  val schema: H2Driver.DDL = sources.schema
  db.run(DBIO.seq(
    schema.create,
    sources ++= Seq(
      ("espn", "ESPN", "sports stuff", "www.espn.com", "sport", "en", "us", "www.logoUrl.com"),
      ("espn 2", "ESPN 2", "sports stuff", "www.espn.com", "sport", "en", "us", "www.logoUrl.com"),
      ("espn 3", "ESPN 3", "sports stuff", "www.espn.com", "sport", "en", "us", "www.logoUrl.com")
    )
  ))

  // debugging
  schema.create.statements.foreach(println)
  Thread.sleep(1000)
  db.run(sources.result).map(_.foreach {
    case (id, name, description, url, category, language, country, logoUrl) =>
      println("  " + name + "\t" + description + "\t" + category + "\t" + language + "\t" )
  })
}