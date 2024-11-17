const express = require("express")
const commandeRouter = express.Router()
const commandeController = require("./commandes.controller")

commandeRouter.post("/", commandeController.addCommande)
module.exports = commandeRouter