// Dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// API routes
const api = require('./server/routes/api');
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));    // Point static path to dist

app.use('/api', api);                                     // Set up API routes

// Catch all other routes and return to index file
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
});

// Get port and store in Express
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);                    // HTTP server

server.listen(port, function () {
  console.log("Running on localhost")
})

