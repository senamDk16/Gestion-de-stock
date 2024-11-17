const express = require("express")
const stockController = require("./stocks.controller")
const stockRouter = express.Router()

stockRouter.post("/", stockController.addStock)
stockRouter.get("/", stockController.getAllStock)
stockRouter.put("/", stockController.putStock)

module.exports = stockRouter