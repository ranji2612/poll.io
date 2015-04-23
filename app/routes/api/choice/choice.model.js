var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var dbSchema = new Schema({
	'pollId'	: String,
	'choice'	: String,
	'votes'		: Number,
	'lastUpd'	: Number
  	},{ collection: 'choiceColl' });

module.exports = mongoose.model('choiceColl', dbSchema);