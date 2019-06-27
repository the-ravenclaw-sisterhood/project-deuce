let orm= require("./config/orm");

let user = {
    selectByCompanyEmail: function(email, callback){
        let query = {
            table: 'company',
            where: [{email: email.toLowerCase()}]
        };
        orm.select(query, callback);
    },
    selectByInfluencerEmail: function(email, callback){
        let query = {
            table: 'influencer',
            where: [{email: email.toLowerCase()}]
        };
        orm.select(query, callback);
    },
    selectByCompanyName: function(name, callback){
        let query = {
            table: 'company',
            where: [{name: name}]
        };
        orm.select(query, callback);
    },
    selectByInfluencerName: function(name, callback){
        let query = {
            table: 'company',
            where: [{name: name}]
        };
        orm.select(query, callback);
    },
    getCompany: function(session, callback){
        let query = {
            table: 'users',
            columns: ['email', 'user_id'],
            where: [{session: session}]
        };
        orm.select(query, callback);
    },
    getInfluencer: function(session, callback){
        let query= {
            table: 'influencer',
            columns: ['email', 'user_id'],
            where: [{session: session}]
        };
        orm.select(query, callback);
    }
};

module.exports= user;