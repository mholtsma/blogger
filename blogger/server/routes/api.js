const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Blog = require('../models/model');
var Comment = require('../models/comments.model');
var db = mongoose.connect("mongodb://admin:Pineapple123@cluster0-shard-00-00-tfniz.mongodb.net:27017,cluster0-shard-00-01-tfniz.mongodb.net:27017,cluster0-shard-00-02-tfniz.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin");

// declare axios for making http requests
const axios = require('axios');

// var testComment = new Comment ({
//   text: 'WE COMMENTING BABY',
//   author: 'Moi'
// });
//
// testComment.save(function (err) {
//   if (err) return handleError(err);
// });


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

// router.get('/', function(req, res) {
//   Blog.find(function(err, blogs){
//     if(err){
//       res.send(err);
//     }
//     console.log('hello world');
//     res.json(blogs);
//   });
// });

// Get all comments
// router.get('/comments', function(req, res) {
//   db.find(function (err, comments) {
//     if (err) {
//       res.send(err);
//     }
//     res.json(comments);
//   });
// });

router.get('/comments', function(req, res) {
  Comment.find(function (err, comments) {
    if (err) {
      res.send(err);
    }
    res.json(comments);
  });
});

module.exports = router;
