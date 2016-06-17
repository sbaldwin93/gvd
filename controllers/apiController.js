var Post = require('../models/posts');
var fs = require('fs-extra');

module.exports.postPosts = function(req, res) {
	var post = new Post(req.body);
	post.save();
	Post.find({})
		.sort({date: -1}).exec(function(err, allPosts) {
		if(err) {
			res.error(err);
		}
		else {
			res.json(allPosts);
		}
	})
};
module.exports.getPosts = function(req, res) {
	Post.find({})
		.sort({date: -1}).exec(function(err, allPosts) {
		if(err) {
			res.error(err);
		}
		else {
			res.json(allPosts);
		}
	})
};