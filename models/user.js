let orm = require("./config/orm");

let user = {
    // insertNewCompany: function(user, callback){
    //     user.email = user.email.toLowerCase();
    //     let query = {
    //         table: 'company',
    //         data: user
    //     };
    //     orm.insert(query, callback);
    // },
    // insertNewInfluencer: function(user, callback){
    //     user.email = user.email.toLowerCase();
    //     let query = {
    //         table: 'influencer',
    //         data: user
    //     };

    //     // console.log(user);
    //     orm.insert(query, callback);
    // },
    // getCompanyById: function(id, callback){
    //     let query = {
    //         table: 'company',
    //         columns: ['email', 'user_id', 'created', 'modified'],
    //         where: [{company_id: id}]
    //     };
    //     orm.select(query, function(error, data){
    //         callback(data.json)
    //     });
    // },

    getCompanyById: function(request, response){
        orm.select({table: "company", column: "company_id", value: request.params.id}, function(error, data){
          response.json(data);
        });
      },
    getInfluencerById: function(request, response){
        orm.select({table: "influencer", column: "influencer_id", value: request.params.id}, function(error, data){
            response.json(data);
          });
    },

    // updateInfluencer: function(request, response){
    //     orm.update({table: "influencer", column:})
    // }
    // selectByCompanyEmail: function(email, callback){
    //     let query = {
    //         table: 'company',
    //         where: [{email: email.toLowerCase()}]
    //     };
    //     orm.select(query, callback);
    // },
    // selectByInfluencerEmail: function(email, callback){
    //     let query = {
    //         table: 'influencer',
    //         where: [{email: email.toLowerCase()}]
    //     };
    //     orm.select(query, callback);
    // },
    // selectByCompanyName: function(name, callback){
    //     let query = {
    //         table: 'company',
    //         where: [{company_name: name}]
    //     };
    //     orm.select(query, callback);
    // },
    // selectByInfluencerName: function(name, callback){
    //     let query = {
    //         table: 'influencer',
    //         where: [{influencer_name: name}]
    //     };
    //     orm.select(query, callback);
    // },
    // getCompany: function(session, callback){
    //     let query = {
    //         table: 'company',
    //         columns: ['email', 'company_id'],
    //         where: [{session: session}]
    //     };
    //     orm.select(query, callback);
    // },
    getCompany: function (cb) {
        orm.selectAll("company", function (res) {
            cb(res);
        });
    },
    getInfluencer: function (cb) {
        orm.selectAll("influencer", function (res) {
            cb(res);
        });
    }
        // getInfluencer: function(session, callback){
        //     let query= {
        //         table: 'influencer',
        //         columns: ['email', 'influencer_id'],
        //         where: [{session: session}]
        //     };
        //     orm.select(query, callback);
        // },
        // updateCompanySession: function(email, uuid, callback){
        //     let query = {
        //         table: 'company',
        //         data: {session: uuid},
        //         where: [{email: email.toLowerCase()}]
        //     };
        //     orm.update(query, callback);
        // },
        // updateInfluencerSession: function(email, uuid, callback){
        //     let query = {
        //         table: 'influencer',
        //         data: {session: uuid},
        //         where: [{email: email.toLowerCase()}]
        //     };
        //     orm.update(query, callback);
        // },
        // removeCompanySession: function(session, callback){
        //     let query = {
        //         table: 'company',
        //         data: {session: null},
        //         where: [{session: session}]
        //     };
        //     orm.update(query, callback);
        // },
        // removeInfluencerSession: function(session, callback){
        //     let query = {
        //         table: 'influencer',
        //         data: {session: null},
        //         where: [{session: session}]
        //     };
        //     orm.update(query, callback);
        // },
    };

    module.exports = user;