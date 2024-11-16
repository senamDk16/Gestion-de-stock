const express = require("express")
require("dotenv").config()
const app = express()

const categorieRouter = require("./categories/categories.route")


//using
app.use(express.json())
app.use(express.urlencoded({ urlencoded: false }))

//routes

app.use("/categories", categorieRouter)

//listen
const port = process.env.PORT || 3000

app.listen(port, () => {

  console.log(`Server is running on port ${port}`)

})