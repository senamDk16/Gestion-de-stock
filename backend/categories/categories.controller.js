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

exports.addCategorie = (req, res)=>{
    const nomCat = req.body.nomCat

    cnx.query(`INSERT INTO categories (nom_Cat) VALUES (?)`, [nomCat], (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send("Error adding category")
        } else {
            res.json({message: 'Category added successfully'})
        }
    })
}