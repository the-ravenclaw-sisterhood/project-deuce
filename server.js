require('dotenv').config();

var express = require('express');
var app = express();
var port = process.env.PORT || 9000;
var config = require('./config');


app.use(express.static(__dirname + '/public')); // you should change this to be wherever your html files are
app.use(express.urlencoded({extended: true}));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.get("/", function(request, response){
    console.log("ROOT ROUTE")
    response.render("index");
});

require('./routes')(app);

app.listen(port);

//@TODO Delete below after you verify the the app is working
// app.route('/').get(function(request, response) {
//     response.json(config);
// });