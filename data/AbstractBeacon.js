var CoreObject = require('./CoreObject.js');

module.exports = class AbstractBeacon extends CoreObject {
    constructor() {
        super()
        this.sqlStrings = {
            select: 'select * from nodetest;',
            insert: 'insert into people set ?;'
        }
        this.data = {
            fName: 'Carlron',
            lName: 'Bennett'
        }
    }
}