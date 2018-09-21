const router = require('express').Router();

router.get('/testQuery', (req, res) => {
   
    let myQuery = " select 1 from dual ";

    req.getConnection(function(error, conn) {
        conn.query(myQuery,function(err, rows, fields) {
            if (err) {
                res.json({"error" : true, "message" : "Error executing SQL query", "data" : "Echec de la connexion"});
            } else {
                res.json({"error" : false, "message" : "Success", "data" : "Connexion réussie"});
            }
        })
    })

});


module.exports = router;