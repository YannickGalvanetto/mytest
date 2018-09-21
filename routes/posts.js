const router = require('express').Router();

router.get('/getAll', (req, res) => {
   
    let myQuery = " select * from sqldtpost left join sqldtuser on cftpuser=cftucode limit 20 ";

    req.getConnection(function(error, conn) {
        conn.query(myQuery,function(err, rows, fields) {
            if (err) {
                res.json({"error" : true, "message" : "Error executing SQL query", "data" : "Echec de la connexion"});
            } else {
                res.json({"error" : false, "message" : "Success", "data" : rows});
            }
        })
    })

});

module.exports = router;