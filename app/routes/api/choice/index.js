//'use strict';

//Current rate collection
var choiceList  = require('./choice.model');

var express = require('express');
var router = express.Router();

var mongoose 	= require('mongoose');
var ObjectId 	= mongoose.Types.ObjectId;

// /api/choices/
router.post('/addChoice', function(req, res) {
	
	choiceList.collection.insert(req.body.choiceArray, function(err, data) {
		if(err)
			console.log(err);
		res.send(200);
	});
});

//Cast a vote
router.get('/vote/:pollId/:choice', function(req,res) {
	choiceList.update({pollId :req.params.pollId, choice : req.params.choice}, { $inc : {votes : 1} }, function(err, data) {
		if(err) res.send(err);
		if(data.length===0)
			console.log('error with choice vote'+req.params.pollId+' '+req.params.choice);
		console.log(data);
		res.send(200);
	});
});
module.exports = router;