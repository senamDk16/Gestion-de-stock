const express = require("express")
const categorieController = require("./categories.controller")
const categorieRouter = express.Router()

categorieRouter.get("/",categorieController.getCategorie)

module.exports = categorieRouter