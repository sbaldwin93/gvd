var mongoose = require('mongoose');
module.exports = mongoose.model('Post', {
	name: {type: String, required: true},
	email: {type: String, required: true},
	number: {type: String, required: true},
	company: {type: String},
	description: {type: String},
	date: {type: Date, default: Date.now}
});