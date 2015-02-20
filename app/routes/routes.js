//'use strict';
var fs = require('fs')

module.exports = function(app, passport) {
	
	//All API
	app.use('/api/poll', require('./api/poll'));
	
	// Load the home page for others apart from api
	//404 handled at UI routing
	app.get('/*', function(req, res){
		
		res.sendfile('public/html/home.html');	
		
	});
	
};