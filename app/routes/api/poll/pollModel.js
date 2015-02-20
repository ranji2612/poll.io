var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var dbSchema = new Schema({
	q	:	String,
	a	:	Array
  	},{ collection: 'pollCollection' });

module.exports = mongoose.model('pollModel', dbSchema);