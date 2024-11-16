const express = require("express")
require("dotenv").config()
const app = express()
const cnx = require("./data/data")
//using
app.use(express.json())
app.use(express.urlencoded({ urlencoded: false }))

//listen
const port = process.env.PORT || 3000

app.listen(port, () => {

  console.log(`Server is running on port ${port}`)

})