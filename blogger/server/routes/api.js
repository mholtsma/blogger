const express = require('express');
const router = express.Router();
const Blog = require('./models/model');

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('hello test');
  console.log('hello world');
});

// Get all posts
app.post('/posts', (req, res) => {
  let Blog = new Blog({
    text: req.body.text
  })

  todo.save().then((doc) => {
  res.send(doc)
}, (e) => {
  res.status(400).send(e)
})
})


module.exports = router;
