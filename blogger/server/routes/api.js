const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const axios = require('axios');

var mongoose = require('mongoose');
var Blog = require('../models/model');

// var testBlogPost = new Blog({
//   title: 'Test',
//   author: 'Marc',
//   body: 'This is a test'
// });

//Example saving something to database
//testBlogPost.save(function (err) {
//  if (err) return handleError(err);
  // saved!
//});

//Example query to database

router.use(bodyParser.urlencoded({extended: false}));

router.get('/posts', function(req, res) {
  Blog.find(function(err, blogs){
    if(err){
      res.send(err);
    }
    console.log('hello world');
    res.json(blogs);
  });
});

// var testComment = new Comment ({
//   text: 'WE COMMENTING BABY',
//   author: 'Moi'
// });
//
// testComment.save(function (err) {
//   if (err) return handleError(err);
// });

router.post('/postBlog', function(req, res) {
  console.log('In router post');
  console.log(req.body.title);
  var blogPost = new Blog({
    title: req.body.title,
    author: req.body.author,
    body: req.body.body
  });
  blogPost.save(function (err) {
    if (err) return handleError(err);
  });
});

router.post('/comments', function(req, res) {
  console.log("POSTING COMMENT in api.js");
  Blog.findOne({_id: req.body.id}, function(err, blog) {
    //console.log("TRYING TO GET ONE BLOG WITH ID: " + req.body);
    console.log("THIS IS THE REQ BODY: " + req.body);
    if (err) return handleError(err);
    if (blog) {
      console.log("THERE IS A BLOG");
      console.log("REQ.BODY.BODY: " + req.body.body);
      blog.comments.push({
        body: req.body.body
      });
      blog.save(function (err) {
        console.log("SAVING TO DB");
        if (err) return handleError(err);
      });
    }
    else {
      console.log("THERE IS NO BLOG");
    }
  });
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

// router.get('/posts', function(req, res) {
//   Blog.find(function(err, blogs){
//     if(err){
//       res.send(err);
//     }
//     res.json(blogs);
//   });
// });
//
// // Get all comments
// router.get('/comments', function(req, res) {
//   Comment.find(function (err, comments) {
//     if (err) {
//       res.send(err);
//     }
//     res.json(comments);
//   });
// });

module.exports = router;
