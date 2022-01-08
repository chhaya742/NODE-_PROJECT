'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : "Chhaya@123",
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'example.org',
//   user     : 'bob',
//   password : 'secret',
//   database : 'node_mysql_crud_db'

// });

// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }

//   console.log('connected as id ' + connection.threadId);
// });