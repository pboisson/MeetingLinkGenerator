/*eslint-env node*/

var express = require('express');
var app = express();

app.get('/', function (req, res) {
	var number = req.query.number;
	var conf = req.query.conf;
	var code = req.query.code;
	var link = 'Tel://';
	if(number == null) {
		number = '+33-23720-2464';
	}
	link += number + ',,' + conf + '#';
	if(code != null) {
		link += ',,' + code + '#';
	}
  res.send(link);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
