const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Blog = require('../models/model');
var Comment = require('../models/comments.model');

// declare axios for making http requests
const axios = require('axios');

var testComment = new Comment ({
  text: 'WE COMMENTING BABY',
  author: 'Moi'
});

testComment.save(function (err) {
  if (err) return handleError(err);
});


// var blogSchema = new Schema({
//   title:  String,
//   author: String,
//   body:   String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
// });

// var Blog = mongoose.model('Blog', blogSchema);

// var testBlogPost = new Blog({
//   title: 'WHAT',
//   author: 'WHOMST',
//   body: 'BOODY'
// });

// testBlogPost.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
// });

router.get('/', function(req, res) {
  Blog.find(function(err, blogs){
    if(err){
      res.send(err);
    }
    console.log('hello world');
    res.json(blogs);
  });
});

module.exports = router;
