require('dotenv').config();

var express = require('express');
var app = express();
var port = process.env.PORT || 9000;
var config = require('./config');

require('./routes/api_routes');

app.use(express.static(__dirname + '/views')); // you should change this to be wherever your html files are
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(port);

//@TODO Delete below after you verify the the app is working
app.route('/').get(function(request, response) {
    response.json(config);
});