var express = require('express');
var router  = express.Router();

var mongoose 	= require('mongoose');
var ObjectId 	= mongoose.Types.ObjectId;

//Poll Collection
var pollList  = require('../api/poll/poll.model');

router.get('/:id', function(req, res){
	pollList.find({_id : ObjectId(req.params.id) }, function(err, data) {
		if(err)
			console.log(err);
		
		console.log(data);
		data=data[0];
		var embedHtml = '<div class="post"><div class="question">'+data.title+'</div><div class="optionsList">';
		console.log(data.choices.length);
		for(var i=0;i<data.choices.length;i++) {
		
			embedHtml +='<input type="radio" name="radio" class="radio" id="radio1" ng-model="selectedChoice.text" value="radio1"/> <label for="">'+data.choices[i] +'</label><br/>';
		
			console.log(data.choices[i]);
		}
		
		embedHtml += '</div></div><link async href="/css/embed.css" rel="stylesheet">';
		console.log(embedHtml);
		res.send(embedHtml);
	}); 
		
});

module.exports = router;