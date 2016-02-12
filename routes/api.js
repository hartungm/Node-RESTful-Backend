var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var Beacon = require('../data/Beacon');

router.get('/', function(req, res) {
    var someBeacon = new Beacon();
   res.send(someBeacon.super.printData()); 
});

module.exports = router;