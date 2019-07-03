var user = require("./models/user");
// var authorizer = require("./controllers/config/authorizer");

module.exports = function (app) {

    app.get("/", function (request, response) {
        console.log("ROOT ROUTE")
        response.render("index");
    });
    // app.post("/api/company", function(request, response) {
    //     user.createCompany(request, response);
    // });
    // app.post("/api/influencer", function(request, response) {
    //     user.createInfluencer(request, response);
    // });
    // app.post("/api/company/login", function(request, response) {
    //     user.login(request, response);
    // });
    // app.post("api/influencer/login", function(request,response){
    //     user.login(request, response);
    // })
    // app.delete("/api/company/login", function(request, response) {
    //     user.logout(request, response);
    // });
    app.get("/api/company", function (request, response) {
        user.getInfluencer(function (data) {
            var handlebarsObject = {
                influencer: data
            };
            response.render("businessUserPage", handlebarsObject);
        });
        //     // user.getCompanyByID(request, response);
    });
    app.get("/api/influencer", function (request, response) {
        // user.getInfluencerbyID(request, response);
        // console.log("ROOT ROUTE!")
        // console.log(response);
        // user.getCompany(request, response);
        // response.render("influencerPage", {company: data})

        user.getCompany(function (data) {
            var handlebarsObject = {
                company: data
            };
            response.render("influencerPage", handlebarsObject);
        });
    });
    // app.get("/api/company/:id", function(request, response) {
    //     user.getCompanyById(request, response);
    // });
};
