const cnx = require("../data/data")
exports.addProduit = (req, res)=>{
    const nom_prod = req.body.nom_prod	
    const prix_U = req.body.prix_U 
    const id_cat = req.body.id_cat

    cnx.query('INSERT INTO produits (nom_prod, prix_U, id_cat) VALUES(?,?,?)',[nom_prod, prix_U, id_cat], (err, results, fields) => {
        if (err) throw err;
        res.send('Produit ajouté avec succès!');
    });

}

exports.getAllProduits = (req, res) => {
    cnx.query('SELECT * FROM produits', (err, results, fields) => {
        if (err) throw err;
        res.send(results);
    });
}

exports.getProduitById = (req, res) => {
    cnx.query('SELECT * FROM produits WHERE id_prod =?', [req.params.id], (err, results, fields) => {
        if (err) throw err;
        res.send(results[0]);
    });
}
exports.putProduit = (req, res)=>{
    const nom_prod = req.body.nom_prod    
    const prix_U = req.body.prix_U 
    const id_cat = req.body.id_cat
    const id_prod = req.params.id
    cnx.query('UPDATE produits SET nom_prod =?, prix_U =?, id_cat =? WHERE id_prod =?', [nom_prod, prix_U, id_cat, id_prod], (err, results, fields) => {
        if (err) throw err;
        res.send('Produit modifié avec succès!');
    });
} 
exports.deleteProduit = (req, res)=>{
    const id_prod = req.params.id
    cnx.query('DELETE FROM produits WHERE id_prod =?', [id_prod], (err, results, fields) => {
        if (err) throw err;
        res.send('Produit supprimé avec succès!');
    });
}