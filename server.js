// REQUIRED FOR CLASSES
require('use-strict');
"use strict";

// BASE INCLUDES
var express = require('express');
var Beacon = require('./data/Beacon');
var app = express();

// ROUTE DECLARATIONS
app.use('/', require('./routes/base'));
app.use('/api', require('./routes/api'));

// SERVER START
app.listen(3000);
console.log('API running on port 3000');

// REMOVE THIS EVENTUALLY
var someBeacon = new Beacon();