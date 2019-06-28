let user = require("../models/user");

let authorizer = {
    authenticateCompany: function(request, response, next){
        user.getCompany(request.headers['x-session-token'], function(error, result){
            if (error){
                console.log(error);
                response.status(500).json({'error': 'oops we did something bad'});
            } else if (!result.length){
                response.status(401).json({'error': 'user must be logged in'});
            } else{
                next();
            }
        });
    },
    authenticateInfluencer: function(request, response, next){
        user.getInfluencer(request.headers['x-session-token'], function(error, result){
            if (error){
                console.log(error);
                response.status(500).json({'error': 'oops we did something bad'});
            } else if (!result.length){
                response.status(401).json({'error': 'user must be logged in'});
            } else{
                next();
            }
        });
    },)
};

module.exports = authorizer;