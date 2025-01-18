var express = require("express")
var cookieParser = require("cookie-parser")
var logger = require("morgan")

var router = require("./routes");

var app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use("/", router)

module.exports = app
