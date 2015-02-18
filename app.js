var express = require('express');
var app = express();

app.get('/', function(request, response){
	response.sendFile(__dirname + "/index.html");
	//response.json("Hello from Node");
});

app.listen(8080);
