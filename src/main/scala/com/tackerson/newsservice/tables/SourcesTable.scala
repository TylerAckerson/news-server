package com.tackerson.newsservice.tables

import java.net.URI

import slick.driver.H2Driver.api._

import scala.concurrent.{ExecutionContext, Future}
import scala.concurrent.ExecutionContext.Implicits.global
import com.tackerson.newsservice.Source
import slick.lifted.ProvenShape



/**
  * Created by tackerson on 3/5/17.
  */


trait SourcesTable {

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
}