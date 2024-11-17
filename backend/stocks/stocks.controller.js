const cnx = require("../data/data")
exports.addStock = (req, res)=>{
    const quantite = req.boby.quantite	
    const id_prod = req.boby.id_prod

    cnx.query('INSERT INTO stocks (quantite, id_prod) VALUES (?,?)', [quantite, id_prod], (err, result) => {
        if (err) throw err
        res.send('Stock added successfully!')
    })
}
exports.getAllStock = (req, res)=>{
    cnx.query('SELECT * FROM stocks', (err, result) => {
        if (err) throw err
        res.json(result)
    })
}

exports.updateStock = (req, res)=>{
    const id = req.params.id
    const quantite = req.boby.quantite
    cnx.query('UPDATE stocks SET quantite =? WHERE id =?', [quantite, id], (err, result) => {
        if (err) throw err
        res.send('Stock updated successfully!')
    })
}