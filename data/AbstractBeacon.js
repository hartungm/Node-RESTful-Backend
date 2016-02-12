module.exports = class AbstractBeacon{
    constructor() {
        this.sqlStrings = {
            select: 'select * from nodetest;',
            insert: 'insert into people set ?;'
        }
        this.data = {
            fName: 'Carlron',
            lName: 'Bennett'
        }
    }
    
    printdata() {
        console.log(this.data);
    }
}