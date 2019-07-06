let orm = require("./config/orm");


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
            if (request.body.password === result[0].password){
                response.redirect("/api/influencer");
            } else {
                console.log("improper login credentials")
            }
        });
    },

    removeCompany: function(request, response) {
        orm.delete({
            table: "company",
            column: "email",
            id: request.params.id,
        }, function(error, result){
            response.json(result);
        })
      },
    removeInfluencer: function(request, response) {
        orm.delete({
            table: "influencer",
            column: "email",
            id: request.params.id,
        }, function(error, result){
            response.json(result);
        })
      },

      updateInfluencer: function(request, response){
        orm.updateInfluencer({
            table: "influencer",
            column1: "first_name",
            value1: request.body.first_name,
            column2: "last_name",
            value2: request.body.last_name,
            column3: "email",
            value3: request.body.email,
            column4: "password",
            value4: request.body.password,
            column5: "bio",
            value5: request.body.bio,
            column6: "followers",
            value6: request.body.followers,
            column7: "price",
            value7: request.body.price,
            confirm: "password",
            response: request.body.password,
            
        }, function(error, result){
            response.json(result);
        })
      },
      updateCompany: function(request, response){
        orm.updateCompany({
            table: "company",
            column1: "company_name",
            value1: request.body.company_name,
            column2: "email",
            value2: request.body.email,
            column3: "password",
            value3: request.body.password,
            column4: "bio",
            value4: request.body.bio,
            column5: "max_price",
            value5: request.body.max_price,
            confirm: "password",
            response: request.body.password,
        }, function(error, result){
            response.json(result);
        })
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

    },



    removeUser: function(condition, cb) {
        orm.delete("company", condition, function(res) {
          cb(res);
        });
      },
      removeUser: function(condition, cb) {
        orm.delete("influencer", condition, function(res) {
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