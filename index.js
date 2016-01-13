

var express = require('express');
var bodyParser = require('body-parser');

var books = ['doom', 'catch-22', 'test'];

var app = express();

app.use(bodyParser.json());

app.get('/books', function(req, res, next) {
	console.log(req.body);
	res.send(books);
});

app.post('/books', function(req, res, next) {
	books.push(req.body.name);
	console.log(req.body);
	res.send(books);
});

app.put('/books', function(req, res, next) {
	var newPosition = req.body.position;
	books[newPosition] = req.body.newName;
	res.send(books);
});

app.delete('/books/:id', function(req, res, next) {
	console.log(req.params);
	books.splice(req.params.id, 1);
	res.send(books);
});


var port = 3000;

app.listen(port, function() {
	console.log('listening on port ' + port);
});

