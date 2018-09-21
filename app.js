const express = require('express');
const app = express();

//Connexion au server MySQL
const mysql = require('mysql');
const myConnection = require('express-myconnection')

const dbOptions = {
  host:'mytest.cybz86vbq3ih.eu-west-3.rds.amazonaws.com',
  user:     "mymaster",
  password: "mymastertest", 
  database: "mydata",
  port: 3306
}

app.use(myConnection(mysql, dbOptions, 'pool'));

//Routes des DAO
const index = require('./routes/index');
app.use(index);

module.exports = app;
