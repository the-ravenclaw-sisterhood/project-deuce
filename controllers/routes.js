var user = require("./controllers/user");
var authorizer = require("./controllers/config/authorizer");

module.exports = function(app) {
    app.post("/api/user", function(request, response) {
        user.create(request, response);
    });
    app.post("/api/user/login", function(request, response) {
        user.login(request, response);
    });
    app.delete("/api/user/login", function(request, response) {
        user.logout(request, response);
    });
    app.get("/api/user", authorizer.authenticate, function(request, response) {
        user.getMyself(request, response);
    });
    app.get("/api/user/:id", authorizer.authenticate, function(request, response) {
        user.getUserByID(request, response);
    });
};