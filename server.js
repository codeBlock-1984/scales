var express = require('express');
var dotenv = require('dotenv');
var path = require('path');

dotenv.config();

var app = express();

var port = process.env.PORT;
var appDir = __dirname + '/dist/';

app.use(express.static(appDir));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname,'/dist/index.html'));
});

app.listen(port, function() {
  console.log(`Scales listening on PORT ${port}`)
});

