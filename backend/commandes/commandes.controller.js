const cnx = require("../data/data")


exports.addCommande = (req, res)=>{
    const dataNow = req.body.dateNow

    cnx.query('INSERT INTO commandes (date_commande) VALUES (?)', [dataNow], (err, result) => {
        if (err) throw err
        res.send('Commande added successfully!')
    })
}