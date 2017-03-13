package com.tackerson.newsservice

import java.net.URI

import com.tackerson.newsservice.tables._
import slick.driver.H2Driver.api._
import com.typesafe.config.Config

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.{ExecutionContext, Future}
import scala.util.Try


/**
  * Created by tackerson on 3/5/17.
  */

//class NewsDatabase(config: String)(implicit ec: ExecutionContext) {
//
//  val db: Database = Database.forConfig(config)
//
//  try {
//    db.createSession()
//    println("databasing")
//    val sources: TableQuery[Sources] = TableQuery[Sources]
//
//    val setupAction: DBIO[Unit] = DBIO.seq(
//      sources.schema.create,
//      sources += ("espn", "ESPN: we do sports")
//    )
//
//    val setupFuture: Future[Unit] = db.run(setupAction)
//
//    setupFuture.flatMap(_ => {
//
//      val allSourcessAction: DBIO[Seq[(String, String)]] =
//        sources.result
//
//      val sourcesFuture: Future[Seq[(String, String)]] =
//        db.run(allSourcessAction)
//
//      sourcesFuture.map(_.foreach(x => {
////        println("name:" ++ x._1)
////        println("desc:" ++ x._2)
//      }))
//
//    })
//
//  } finally db.close
//
//
//
//}
//
//object NewsDatabase {
//
//  def apply(config: String)(implicit ec: ExecutionContext): NewsDatabase = {
//    new NewsDatabase(config)
//  }
//
//  def apply(config: Config)(implicit ec: ExecutionContext): Try[NewsDatabase] = {
//    DatabaseCluster.forConfig(config, "twilio.database.test-db").map { config =>
//      new MemeDatabase(config)
//    }
//  }
//}
