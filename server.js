require('use-strict');
"use strict";
var express = require('express');
var mysql = require('mysql');
var Beacon = require('./data/Beacon');

var app = express();

// app.use('/', require('./routes/site'));
app.use('/api', require('./routes/api'));

app.listen(3000);
console.log('API running on port 3000');

// var person = {
//     lname: 'Douglas',
//     fname: 'Dan'
// };

// var QUERY_STRING = 'insert into people set ?;';

// dbAccess(QUERY_STRING, person);

var someBeacon = new Beacon();
dbAccess(someBeacon.sqlStrings['insert'], someBeacon.data);

function dbAccess(queryString, someObject) {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'nodetest' 
    });
    connection.connect();
    
    var query = connection.query(queryString, someObject, function(err, result) {
        console.log(query.sql);
    });
}