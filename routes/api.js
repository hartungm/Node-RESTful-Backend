var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var Beacon = require('../data/Beacon');

router.get('/', function(req, res) {
    res.send('This is your API base route');
});

module.exports = router;
