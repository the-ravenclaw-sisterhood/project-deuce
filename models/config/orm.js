var connection= require("./connection");

var orm = {
select: function(query, callback) {
        let queryString= "SELECT ?? FROM ??";
        let searchInputs= [query.columns || ['*'], query.table];
        if(query.where){
            queryString = orm._buildWhereStatement(query, queryString, searchInputs);
        }
        let statement= connection.query(queryString, searchInputs, function(err, result) {
            callback(err, result)
        });
        if (query.debug){
            console.log(statement.sql)
        }
    },
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
    delete: function(tableInput, valofCol) {
        let queryString = "DELETE FROM ?? WHERE ?";
        connection.query(queryString, [tableInput, valofCol], function(err, result) {
        
        if (err) throw err;
            console.log(result);
        });
    },
    insert: function(query, callback) {
        let queryString = "INSERT INTO ?? SET ?";
        let statement = connection.query(queryString, [query.table, query.data], function(error, result) {
            callback(error, result);
        });
        if (query.debug){
            console.log(statement.sql);
        }
    },
    update: function(query, callback) {
        let queryString = "UPDATE ?? SET ? WHERE ?";
        let statement = connection.query(queryString, [query.table, query.data, query.where[0]], function(error, result) {
            callback(error, result);
        });
        if (query.debug){
            console.log(statement.sql);
        }
    },
  };
  
  module.exports = orm;