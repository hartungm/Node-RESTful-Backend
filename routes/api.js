var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var Beacon = require('../data/Beacon');

router.get('/', function(req, res) {
    res.send('This is your API base route');
});

router.get('/Beacon', function(req, res) {
    var id = req.query.id;
    if (id <= 0) {
        console.log("ID Parameter is invalid");
        res.sendStatus(404);
    } else {
        var beacon = new Beacon();
        beacon.id = id;
        try {
            beacon.load();
        } catch(Exception) {
            console.log("Object Not Found");
            res.sendStatus(404);
        }
        var sendObj = beacon.stringify();
        console.log("Retrieval for Beacon id " + id + " successful.");
        console.log("Sending: " + sendObj);
        res.send(sendObj);
    }
});

module.exports = router;
