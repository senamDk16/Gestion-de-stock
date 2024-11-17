const express = require("express")
require("dotenv").config()
const app = express()

const categorieRouter = require("./categories/categories.route")
const produitRouter = require("./produits/produits.route")
const stockRouter = require("./stocks/stocks.route")
const commandeRouter = require("./commandes/commande.route")


//using
app.use(express.json())
app.use(express.urlencoded({ urlencoded: false }))

//routes
app.use("/categories", categorieRouter)
app.use("/produits", produitRouter)
app.use("/stocks",stockRouter)
app.use("/commandes",commandeRouter)

//listen
const port = process.env.PORT || 3000

app.listen(port, () => {

  console.log(`Server is running on port ${port}`)

})