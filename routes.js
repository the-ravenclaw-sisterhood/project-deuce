var user = require("./controllers/user");
// var authorizer = require("./controllers/config/authorizer");

module.exports = function(app) {
    app.post("/api/company", function(request, response) {
        user.createCompany(request, response);
    });
    app.post("/api/influencer", function(request, response) {
        user.createInfluencer(request, response);
    });
    app.post("/api/company/login", function(request, response) {
        user.login(request, response);
    });
    app.post("api/influencer/login", function(request,response){
        user.login(request, response);
    })
    app.delete("/api/company/login", function(request, response) {
        user.logout(request, response);
    });
    app.get("/api/company", function(request, response) {
        // insert authorizer.authenticateCompany
        user.getCompany(request, response);
    });
    app.get("/api/influencer", function(request, response) {
        // insert authorizer.authenticateInfluencer
        user.getInfluencer(request, response);
    });
    // app.get("/api/company/:id", authorizer.authenticateCompany, function(request, response) {
    //     user.getCompanyByID(request, response);
    // });
    // app.get("/api/influencer:id", authorizer.authenticateInfluencer, function(request, response) {
    //     user.getCompanyByID(request, response);
    // });
};
