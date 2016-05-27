var express = require('express');
var app = express();
var server = require('http').Server(app);

var io = require('socket.io')(server);

app.use(express.static('public'))

app.get('/', function(req, res){
	res.status(200).send("Hola Word");
});

function datos (){

	var socket = new Object();
	// socket.values = [["0:00:0", 0], ["6:00:3", 3], ["6:00:20", 3.1], ["6:00:23", 1], ["6:00:25", 8], ["6:00:27", 6]];
	socket.values = [['Tiempo', 'Temperatura'],["0:00:0", 0], ["6:00:3", 3], ["6:00:20", 3.1], ["6:00:23", 1], ["6:00:25", 8], ["6:00:28", 4]];
	maxTemp = 100 ;
	return socket;

}


io.on('connection', function (socket){
	console.log("Este mensaje es una conexion de Socket");
	socket.emit('messages', datos());
});

server.listen(8080, function() {
	console.log("Server Run in http://localhost:8080/");
});