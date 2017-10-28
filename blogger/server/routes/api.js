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

// Save comment on blog to db
router.post('/comments', function(req, res) {

  Blog.findOne({_id: req.body.id}, function(err, blog) {
    if (err) return handleError(err);

    // Make sure there is something to push
    if (blog) {
      blog.comments.push({
        body: req.body.body
      });
      blog.save(function (err) {
        if (err) return handleError(err);
      });
    }
  });
});

module.exports = router;
