var connection= require("./connection");

var orm = {
    // createTable: function(name, properties, retry=0){
    //     let query = this._buildTableQuery(name, properties);
    //     connection.query(query, function(error, result){
    //         if (error) {
    //             if (query.includes('FOREIGN KEY') && retry < 500){
    //                 console.log('Waiting on foreign key constraint: ', retry);
    //                 orm.create(name, properties, debug, retry+1);
    //             } else {
    //                 console.log('Error creating table: ', query, error);
    //                 throw error;
    //             }
    //         } else {
    //             console.log('Created table: ', query);
    //         }
    //     });
    // },
    // _buildTableQuery: function(name, properties){
    //     let query = 'CREATE TABLE IF NOT EXISTS ' + name + '(';
    //     let tableProperties = [];
    //     for (let column in properties) {
    //         let statement = [];
    //         statement.push(column + ' ' + properties[column].type);
    //         if (properties[column].notNull){
    //             statement.push('NOT NULL');
    //         }
    //         if (properties[column].autoIncrement){
    //             statement.push('AUTO_INCREMENT');
    //         }
    //         if (properties[column].default != null){
    //             statement.push('DEFAULT '+ properties[column].default);
    //         }
    //         if (properties[column].timestampCreate){
    //             statement.push('DEFAULT CURRENT_TIMESTAMP');
    //         }
    //         if (properties[column].timestampUpdate){
    //             statement.push('ON UPDATE CURRENT_TIMESTAMP');
    //         }
    //         tableProperties.push(statement.join(' '));
    //         if (properties[column].primaryKey){
    //             tableProperties.push('PRIMARY KEY ('+column+')');
    //         }
    //         if (properties[column].uniqueKey){
    //             tableProperties.push('UNIQUE KEY '+column+'('+column+')');
    //         }
    //         if (properties[column].foreignKey){
    //             let fkQuery = 'CONSTRAINT '+column+' FOREIGN KEY('+column+')';
    //             fkQuery += ' REFERENCES '+properties[column].referenceTable+ '('+properties[column].referenceId+')';
    //             fkQuery += ' ON DELETE CASCADE ON UPDATE CASCADE';
    //             tableProperties.push(fkQuery);
    //         }
    //     }
    //     query += tableProperties.join(',');
    //     query += ') ENGINE=InnoDB DEFAULT CHARSET=utf8;';
    //     return query;
    // },
    // select: function(query, callback) {
    //     console.log(query);
    //     let queryString= "SELECT ?? FROM ??";
    //     let searchInputs= [query.columns || ['*'], query.table];
    //     if(query.where){
    //         queryString = orm._buildWhereStatement(query, queryString, searchInputs);
    //     }
    //     let statement= connection.query(queryString, searchInputs, function(err, result) {
    //         callback(err, result)
    //     });
    //     if (query.debug){
    //         console.log(statement.sql)
    //     }
    // },

    select: function (queryObject, callback) {
        console.log(queryObject)
        let queryString = "SELECT * FROM ??";
        let searchCriteria = [queryObject.table];

        if (queryObject.value) {
            queryString += " WHERE ?? = ?";
            searchCriteria.push(queryObject.column);
            searchCriteria.push(queryObject.value);
        }
        connection.query(queryString, searchCriteria, function (err, result) {
            // if (err) throw err;
            callback(err, result);
        });
    },
    // select: function(tableInput, cb) {
    //     var queryString = "SELECT * FROM ??";
    //     connection.query(queryString, [tableInput], function(err, result){
    //         if (err) {
    //             throw err;
    //         }
    //         console.log(result);
    //         cb(result);
    //     });
    // }
    _buildWhereStatement: function(query, queryString, searchInputs){
        queryString += " WHERE ";
        let whereString = [];
        for (let where in query.where) {
            searchInputs.push(query.where[where]);
            whereString.push(' ? ');
        }
        let operator = query.operator || 'AND';
        queryString += whereString.join(operator);
        return queryString;
    },
    // delete: function(tableInput, valofCol) {
    //     let queryString = "DELETE FROM ?? WHERE ?";
    //     connection.query(queryString, [tableInput, valofCol], function(err, result) {
        
    //     if (err) throw err;
    //         console.log(result);
    //     });
    // },
    // insert: function(query, callback) {
    //     let queryString = "INSERT INTO ?? SET ?";
    //     let statement = connection.query(queryString, [query.table, query.data], function(error, result) {
    //         callback(error, result);
    //     });
    //     if (query.debug){
    //         console.log(statement.sql);
    //     }
    // },
    update: function(query, callback) {
        let queryString = "UPDATE ?? SET ? WHERE ?";
        let statement = connection.query(queryString, [query.table, query.data, query.where[0]], function(error, result) {
            callback(error, result);
        });
        if (query.debug){
            console.log(statement.sql);
        }
    },
    // query: function(queryString, queryArray, callback) {
    //     connection.query(queryString, queryArray, function(error, result) {
    //         callback(error, result);
    //     });
    // }
  };
  
  module.exports = orm;