var mysql = require('mysql');

module.exports = class CoreDB {

    // DB CONFIG
    constructor() {
        this.pool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'nodetest'
        });
    }

    // METHOD FOR STATEMENTS USING PARAMETERS
    dbExecuteWithData(queryString, dataSet, callback) {
        this.pool.getConnection(function(err, connection) {

            if(!err) {
                var query = connection.query(queryString, dataSet, function(err, result) {
                    if(!err) {
                        console.log("DBExecute Result: ");
                        console.log(result);
                        console.log("DBExecute SQL: ");
                        console.log(query.sql);
                    } else {
                        console.log('SQL Error, offending SQLString: ' + query.sql);
                    }

                    if (callback) {
                        callback(err, result);
                    }
                });
            } else {
                console.error(err);
                throw "Error getting DB connection! " + err;
            }

            connection.release();
        });
    }

    // METHOD FOR STATEMENTS WITH NO PARAMETERS
    dbExecute(queryString, callback) {
        this.pool.getConnection(function(err, connection) {

            if(!err) {
                var query = connection.query(queryString, function(err, result) {
                    if(!err) {
                        console.log("DBExecute Result: ");
                        console.log(result);
                        console.log("DBExecute SQL: ");
                        console.log(query.sql);
                    } else {
                        console.log('SQL Error, offending SQLString: ' + query.sql);
                    }

                    if (callback) {
                        callback(err, result);
                    }
                });
            } else {
                console.error(err);
                throw "Error getting DB connection! " + err;
            }

            connection.release();
        });
    }

    create(table, data, callback) {
        this.dbExecuteWithData('INSERT INTO '+table+' SET ?;', data, callback);
    }

    load(table, callback) {
        this.dbExecute('SELECT * FROM '+table+';', callback);
    }

    update(table, data, callback, id) {
        this.dbExecuteWithData('UPDATE '+table+' SET ? WHERE id = '+id+';', data, callback);
    }

    delete(table, id) {
        this.dbExecute('DELETE FROM '+table+' WHERE id = '+ id +';');
    }

};