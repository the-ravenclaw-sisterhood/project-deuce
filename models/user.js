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
    //     orm.select(query, callback);
    // },
    // getInfluencerById: function(id, callback){
    //     let query = {
    //         table: 'influencer',
    //         columns: ['email', 'user_id', 'created', 'modified'],
    //         where: [{influencer_id: id}]
    //     };
    //     orm.select(query, callback);
    // },
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
        orm.select("company", function (res) {
            cb(res);
        });
    },
    getInfluencer: function (cb) {
        orm.select("influencer", function (res) {
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