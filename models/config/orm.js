var connection= require("./connection");

var orm = {
    selectWhere: function(tableInput, colToSearch, valOfCol) {
      let queryString = "SELECT * FROM ?? WHERE ?? = ?";
      connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
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
  };
  
  module.exports = orm;