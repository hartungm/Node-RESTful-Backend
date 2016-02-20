var CoreDB = require('./../db/CoreDB');

module.exports = class CoreObject {
    constructor() {

        this.data = {
            // TODO: ADD BASE DATA FIELDS
        };
        this.db = new CoreDB();
        this.id = 0;
        this.someField = 'uhfdskj';
    }

    saveCallback(err, result) {
        if (!err && !this.id) {
            this.id = result.id;
        }
    }

    loadCallback(err, result) {
        if (!err) {
            this.data = result; //FIXME this isn't quite right (ie, it'll probably have id)
            this.id = result.id;
        }
    }

    save() {
        var table = this.constructor.name;
        if (this.id) {
            this.db.update(table, this.data, this.saveCallback, this.id);
        } else {
            this.db.create(table, this.data, this.saveCallback);
        }
    }

    load() {
        this.db.load(this.constructor.name, this.loadCallback);
    }

    delete() {
        this.db.delete(this.constructor.name, this.id, null);
    }

};
