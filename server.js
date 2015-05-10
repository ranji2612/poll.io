
//Initial configuration
var express  = require('express');
var app      = express(); 								// create our app w/ express
var mongoose = require('mongoose'); 					// mongoose for mongodb
var bodyParser     = require('body-parser');			// To fetch data during posts
var port  	 = process.env.OPENSHIFT_INTERNAL_PORT || 8080; 				// set the port
var database = require('./config/database'); 			// load the database config

var db = mongoose.connect(database.url);	// connect to mongoDB database on modulus.io

//Middle-tier configuration

app.use(bodyParser.urlencoded({ extended: false }))    // parse application/x-www-form-urlencoded
app.use(bodyParser.json())    // parse application/json


// All the minified files will be stored in dist Eg. dist/js/app.min.js 
app.use(express.static(__dirname + '/dist')); 	// set the static files location
app.use(express.static(__dirname + '/public')); 	// set the static files location
app.use(express.static(__dirname + '/scripts')); 	// set the static files location


//route file
require('./app/routes/routes.js')(app);


//Start the awesomeness
app.listen(process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1', port ,function() {	
	console.log('Magic happens on port ',port); 
});
