package com.tackerson.newsservice

import com.tackerson.newsservice.tables.SourcesTable
import slick.driver.H2Driver.api._
import scala.concurrent.{ExecutionContext, Future}

/**
  * Created by tackerson on 3/12/17.
  */
class SourceDatabase(config: String)(implicit ec: ExecutionContext) extends SourcesTable {
  val db: Database = Database.forConfig(config)

  try {
    val setup = DBIO.seq(
      sources.schema.create,
      sources += Source("espn", "ESPN: we do sports"),
      sources += Source("espn2", "ESPN 2: we also do sports"),
      sources += Source("espn3", "ESPN 3: still doing sports")
    )

    val setupFuture = db.run(setup)

    setupFuture.onComplete(_.getOrElse({
      println("setup did not work")
    }))

  } finally db.close

}

object SourceDatabase {

  def apply(config: String)(implicit ec: ExecutionContext): SourceDatabase = {
    new SourceDatabase(config)
  }

}
