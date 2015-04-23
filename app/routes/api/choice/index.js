//'use strict';

//Current rate collection
var choiceList  = require('./choice.model');

var express = require('express');
var router = express.Router();

var mongoose 	= require('mongoose');
var ObjectId 	= mongoose.Types.ObjectId;

// /api/choices/
router.post('/addChoice', function(req, res) {
	console.log(req.body.choiceArray);
	choiceList.collection.insert(req.body.choiceArray, function(err, data) {
		if(err)
			console.log(err);
		res.send(200);
	});
});

module.exports = router;