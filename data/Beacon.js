module.exports = class Beacon{
    constructor() {
        this.sqlStrings = {
            select: 'select * from nodetest;',
            insert: 'insert into people set ?;'
        }
        this.data = {
            fName: 'Matt',
            lName: 'Armand'
        }
    }
}