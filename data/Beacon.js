var AbstractBeacon = require('./AbstractBeacon');
var CoreDB = require('./../db/CoreDB');

module.exports = class Beacon extends AbstractBeacon{
    constructor() {
        super();
        this.data = {};
        //this.printdata();
    }

    printdata() {
        console.log(this.someField);
        this.id = 4;
        //this.save();
        this.load();
    }
};
