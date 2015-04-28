//'use strict';

var morgan = require('morgan');
var logger 		= require('../../config/logging.js'); 

module.exports = function(app, passport) {
	
	//Setup the logger 
	app.use(morgan('{"host" : ":remote-addr", "mth" : ":method","url" : ":url", "req" : ":req[header]", "responseTime" : ":response-time", "ua" : ":user-agent"}', {stream: logger.stream}));
	
	//All API
	app.use('/api/poll', require('./api/poll'));
	app.use('/api/choice', require('./api/choice'));
	
	//For embed docs
	app.use('/embed', require('./embed'));
	
	// Load the home page for others apart from api
	//404 handled at UI routing
	app.get('/*', function(req, res){
		
		res.sendfile('public/html/home.html');	
		
	});
	
};
