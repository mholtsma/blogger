const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var Blog = require('../models/model');

// declare axios for making http requests
const axios = require('axios');

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
    body: req.body.body,
  });
  blogPost.save(function (err) {
    if (err) return handleError(err);
  });
});

module.exports = router;
