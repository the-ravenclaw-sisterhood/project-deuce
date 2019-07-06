let orm = require("./config/orm");
require('../routes');

let user = {
    insertNewCompany: function (user, callback) {
        user.email = user.email.toLowerCase();
        let query = {
            table: 'company',
            data: user
        };
        orm.insert(query, callback);
    },
    insertNewInfluencer: function (user, callback) {
        user.email = user.email.toLowerCase();
        let query = {
            table: 'influencer',
            data: user
        };
        orm.insert(query, callback);
    },

    getCompanyById: function (request, response) {
        orm.select({
            table: "company",
            column: "company_id",
            value: request.params.id
        }, function (error, data) {
            response.json(data);
        });
    },

    getInfluencerById: function (request, response) {
        orm.select({
            table: "influencer",
            column: "influencer_id",
            value: request.params.id
        }, function (error, data) {
            response.json(data);
        });
    },

    loginCompany: function (request, response) {
        orm.select({
            table: "company",
            column: "email",
            value: request.body.email
        }, function(error, result){
            response.json(result);
            if (request.body.password === result[0].password){
                console.log("Login Success");
            } else {
                console.log("improper login credentials")
            }
        });
    },

    loginInfluencer: function (request, response) {
        orm.select({
            table: "influencer",
            column: "email",
            value: request.body.email
        }, function(error, result){
            response.json(result);
            console.log(result[0])
            if (request.body.password === result[0].password){
                console.log("Login Success");
            } else {
                console.log("improper login credentials")
            }
        });
    },

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