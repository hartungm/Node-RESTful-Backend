var AbstractBeacon = require('./AbstractBeacon');
module.exports = class Beacon extends AbstractBeacon{
    constructor() {
        super();
        this.sqlStrings = {
            select: 'select * from nodetest;',
            insert: 'insert into people set ?;'
        }
        this.data = {
            fName: 'Carlron',
            lName: 'Armand'
        }
        this.printdata();
        super.printdata();
    }
    
    printdata() {
        console.log('Eat shit and die');
    }
}