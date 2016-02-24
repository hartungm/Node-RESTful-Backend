var AbstractBeacon = require('./AbstractBeacon');
var CoreDB = require('./../db/CoreDB');

module.exports = class Beacon extends AbstractBeacon{
    constructor() {
        super();
        this.sqlStrings = {
            select: 'select * from people;',
            insert: 'insert into people set ?;'
        };
        this.data = {
            fName: 'Silly',
            lName: 'Armand'
        };
        this.printdata();
    }

    printdata() {
        console.log(this.someField);
        this.id = 4;
        //this.save();
        this.load();
    }
};
