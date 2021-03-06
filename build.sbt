name := "news_server"

version := "1.0"

scalaVersion := "2.11.8"
val circeVersion = "0.7.0"

libraryDependencies ++= Seq(
  "com.typesafe" % "config" % "1.3.1",
  "com.typesafe.akka" %% "akka-actor" % "2.4.17",
  "com.typesafe.akka" %% "akka-http-core" % "2.4.7",
  "com.typesafe.akka" %% "akka-http-experimental" % "2.4.7",
  "com.typesafe.akka" %% "akka-parsing" % "2.4.7",
  "com.typesafe.akka" %% "akka-stream" % "2.4.7" ,
  "com.typesafe.slick" %% "slick" % "3.1.0",
  "com.h2database" % "h2" % "1.4.193",
  "org.slf4j" % "slf4j-nop" % "1.6.4",
  "io.circe" %% "circe-core" % circeVersion,
  "io.circe" %% "circe-generic" % circeVersion,
  "io.circe" %% "circe-parser" % circeVersion
)

