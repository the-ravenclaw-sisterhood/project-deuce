var user = require("./models/user");

module.exports = function (app) {

    app.get("/", function (request, response) {
        // console.log("ROOT ROUTE")
        response.render("index");
    });
    app.get("/influencerSignUp", function (request, response) {
        response.render("../views/signUpInfluencer.handlebars")

    });

    app.get("/businessSignUp", function (request, response) {
        response.render("../views/signUpBusiness.handlebars")

    });

    app.get("/businesssettings", function (request, response) {
        // console.log("ROOT ROUTE")
        response.render("layouts/businessSettings");
    });
    app.get("/influencersettings", function (request, response) {
        // console.log("ROOT ROUTE")
        response.render("layouts/influencerSettings");
    });

    app.post("/api/company", function(request, response) {
        user.createCompany(request, response);
    });
    app.post("/api/influencer", function(request, response) {
        user.createInfluencer(request, response);
    });
    app.post("/api/company/login", function(request, response) {
        user.loginCompany(request, response);
        // console.log(request.body.password, response.req.body.password)
        // console.log(response);

        // if (request.body.password !== response.req.body.password){
        //     response.status(401).json({'error': 'improper login credentials'});
        // } else {
        //     console.log("Login Successful");
        // }
    });
    app.post("api/influencer/login", function(request,response){
        user.loginInfluencer(request, response);
    })
    // app.delete("/api/company/login", function(request, response) {
    //     user.logout(request, response);
    // });
    // app.get("/api/company", function(request, response) {
    //     user.getInfluencerById(request, response);
    //     // user.getCompanyByID(request, response);
    // });
    app.get("/api/influencer", function (request, response) {
        user.getCompany(function (data) {
            var handlebarsObject = {
                company: data
            };
            response.render("influencerPage", handlebarsObject);
        });
    });

    app.get("/api/company", function (request, response) {
        user.getInfluencer(function (data) {
            var handlebarsObject = {
                influencer: data
            };
            response.render("businessUserPage", handlebarsObject);
        });
    });
    
    app.get("/api/company/:id", function (request, response) {
        user.getCompanyById(request, response);

    });
    app.get("/api/influencer/:id", function (request, response) {
        user.getInfluencerById(request, response);
    });
};

