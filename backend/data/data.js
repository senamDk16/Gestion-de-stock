const mysql = require("mysql")
require("dotenv").config()

// Connect to the MySQL database
const connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})


module.exports = connection