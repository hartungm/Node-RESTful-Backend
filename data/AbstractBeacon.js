var CoreObject = require('./CoreObject');

module.exports = class AbstractBeacon extends CoreObject {
    constructor() {
        super();
        this.data = {
            fName: 'Carlron',
            lName: 'Bennett'
        };
    }
};
