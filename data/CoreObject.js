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

    save() {
        var table = this.constructor.name;
        if (this.id) {
            this.db.update(table, this.data, this.saveCallback, this.id);
        } else {
            this.db.create(table, this.data, this.saveCallback);
        }
    }

    load() {
        this.db.load(this.constructor.name, this.id, this.loadCallback);
    }

    delete() {
        this.db.delete(this.constructor.name, this.id, null);
    }

    stringify() {
        return "{" + this.constructor.name +
                ": {hey, it worked}}";
    }

    saveCallback(err, result) {
        console.log('in the save callback');
        console.log(err);
        console.log(result);
        console.log(this);
        // if (!err && !this.id && result) {
        //     console.log(this.id);
        //     this.id = result.insertId;
        // } this is undefined here. WTF?
    }

    loadCallback(err, result) {
        console.log('in the load callback');
        console.log(err);
        console.log(result);
        console.log(result[0]);
        console.log(result[0].fName);
        if (!err && result) {
            console.log(this);
            //Carlton, I need some help with JS namespaces.  THIS is always undefined..wtf?
            // this.data = result[0]; //FIXME this isn't quite right (ie, it'll probably have id)
            // this.id = result[0].id;
            // delete this.data.id;
        }
    }

};
