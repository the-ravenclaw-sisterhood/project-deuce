var user = require("./controllers/user");
var authorizer = require("./controllers/config/authorizer");

module.exports = function(app) {
    app.post("/api/user", function(request, respsonse) {
        user.create(request, respsonse);
    });
    app.post("/api/user/login", function(request, respsonse) {
        user.login(request, response);
    });
    app.delete("/api/user/login", function(request, response) {
        user.logout(request, response);
    });
    app.get("/api/user", authorizer.authenticate, function(request, response) {
        user.getCompany(request, response);
    });
    app.get("/api/user", authorizer.authenticate, function(request, response) {
        user.getInfluencer(request, response);
    });
    app.get("/api/user/:id", authorizer.authenticate, function(request, response) {
        user.getUserByID(request, response);
    });
};
