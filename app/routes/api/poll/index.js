//'use strict';

//Poll collection
var pollList  = require('./poll.model');

var express = require('express');
var router = express.Router();

var mongoose 	= require('mongoose');
var ObjectId 	= mongoose.Types.ObjectId;

// /api/poll/

//Adding a new link
router.post('/addNew', function( req, res) {
	var keywords = req.body.title.toLowerCase().replace(/[:\.,!@#$%^&*()_=]/g,' ').match(/\S+/g).sort();
	var user = req.body.user;
	if(typeof(user)=="undefined" || user.trimLeft().length ===0) user = "Anonymous";
	
	pollList.create({ title: req.body.title, keyw : keywords, choices: req.body.choices, user : user, views: 1, cd : Date.now() }, function(err,data) {
		if(err)
			console.log(err);
		res.send(data._id);
		res.end();
	});
});

//Searching poll based on keywords of title
router.get('/search/:searchQuery', function(req, res) {
	var searchQueryList = req.params.searchQuery.toLowerCase().replace(/[:\.,!@#$%^&*()_=]/g,' ').match(/\S+/g).sort();
	// TO match partial words
	var regExsearchQueryList=[];
	for (var i in searchQueryList) {
		//Make a regex if only the word is atleast 2 letters
		if (searchQueryList[i].length > 1) {
			regExsearchQueryList.push(RegExp(searchQueryList[i],''));
		} else {
			regExsearchQueryList.push( searchQueryList[i] );
		}
	}
	//Querying the DB
	pollList.find({ keyw : { $in : regExsearchQueryList} }, function(err, data) {
		if (err) { res.send(err);res.end(); }
		res.send(data);
	});
});

//Get a specific Poll
router.get('/:id', function(req, res) {
	pollList.find({_id : ObjectId(req.params.id) }, function(err, data) {
		if(err)
			console.log(err);
		res.json(data);
	});
});

//Increment the view parameter for the poll
router.get('/inc/:id', function(req, res) {
	pollList.update({_id : ObjectId(req.params.id) }, { $inc : {views : 1}} , function(err, data) {
		if(err)
			console.log(err);
		res.send(200);
	});
});
module.exports = router;