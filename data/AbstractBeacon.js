var CoreObject = require('./CoreObject.js');

module.exports = class AbstractBeacon extends CoreObject {
    constructor() {
        super();
        this.data = {
            fName: 'Carlron',
            lName: 'Bennett'
        };
    }
};