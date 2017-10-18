const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// declare axios for making http requests
const axios = require('axios');

var blogSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

var Blog = mongoose.model('Blog', blogSchema);

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('hello test');
  console.log('hello world');
});

var testBlogPost = new Blog({
  title: 'Test',
  author: 'Marc',
  body: 'This is a test'
});

testBlogPost.save(function (err) {
  if (err) return handleError(err);
  // saved!
});


module.exports = router;
