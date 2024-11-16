const express = require("express")
const produitController = require("./produits.controller")
const produitRouter = express.Router()


produitRouter.post("/", produitController.addProduit)
produitRouter.get("/", produitController.getAllProduits)
produitRouter.get("/:id", produitController.getProduitById)
produitRouter.put("/:id",produitController.putProduit)
produitRouter.delete("/:id", produitController.deleteProduit)

module.exports = produitRouter