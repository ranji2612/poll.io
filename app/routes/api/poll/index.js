//'use strict';

//Poll Data Model
var pollModel = require('./pollModel');

var mongoose = require('mongoose');

var express = require('express');
var router = express.Router();

//Retrieve all polls
router.get('/', function(req, res) {
	console.log('Getting al polls  in some order');
	pollModel.find({},{},{skip:0, limit:20}, function(err, data) {
		if(err) res.send(err);
		res.json(data);
	});
});

//Add a new poll
router.post('/', function( req, res) {
	console.log('Reached poll route');
	pollModel.create({q : req.body.q, a:req.body.a}, function(err, data) {
		if(err) res.send(err);
		res.json(200);
	});
});

//Getting Poll
router.get('/:id', function(req, res) {
	console.log('Getting poll with id ');
	pollModel.find({"_id": mongoose.Types.ObjectId(req.params.id)},function(err, data) {
		if(err) res.send(err);
		console.log(data);
		res.json(data);
	});
});

//Vote in a given poll
router.post('/:id', function( req, res) {
	console.log('Casting vote');
	res.send(200);
});


module.exports = router;