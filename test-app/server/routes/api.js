const express = require('express');
const router = express.Router();

// Get API listing
router.get('/', function(req, res){
  res.send('API works')
});

module.exports = router;
