/*eslint-env node*/

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var name = req.get('name');
  res.send('Hello World!' + ' ' + name);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
