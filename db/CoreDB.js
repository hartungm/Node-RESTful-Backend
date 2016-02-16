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
    
    // METHOD FOR INSERTS USING SETS
    dbExecute(queryString, dataSet) {
        this.pool.getConnection(function(err, connection) {
            
            if(!err) {
                var query = connection.query(queryString, dataSet, function(err, result) {
                    if(!err) {
                        console.log("DBExecute SQL: ");
                        console.log(query.sql);
                    } else {
                        console.log('SQL Error, offending SQLString: ' + query.sql);
                    }
                });
            } else {
                console.error(err);
            }
            
            connection.release();
        });
    }
    
    // METHOD FOR SELECTS WITH NO PARAMETERS
    dbAccess(queryString) {
        this.pool.getConnection(function(err, connection) {
            
            if(!err) {
                var query = connection.query(queryString, function(err, result) {
                    if(!err) {
                        console.log("DBAccess Result: ");
                        console.log(result);
                        console.log("DBAccess SQL: ");
                        console.log(query.sql); 
                    } else {
                        console.log('SQL Error, offending SQLString: ' + query.sql);
                    }
                });
            } else {
                console.error(err);
            }
            
            connection.release();
        });
    }
}