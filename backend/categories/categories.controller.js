const cnx = require("../data/data")
exports.getCategorie = (req, res)=>{
        cnx.query('SELECT * FROM categories', (err, result) => {
            if (err) {
                console.log(err)
                res.status(500).send("Error getting categories")
            } else {
                res.json(result)
            }
        })
}

