var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var dbSchema = new Schema({
	'title'		: String,
	'user'		: String,
	'keyw'		: Array,
	'choices'	: Array,
	'views'		: Number,
	'cd'		: Number
  	},{ collection: 'pollList' });

module.exports = mongoose.model('pollList', dbSchema);