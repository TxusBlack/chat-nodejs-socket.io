// Cargamos express en una variable
var express = require('express');
// Llamamos al método express
var app = express();
// Cargamos el server http pasándole la app de express
var server = require('http').Server(app);
// Pasar la libreria de socket.io para trabajarlos
var io = require('socket.io')(server);

server.listen(6677, function () {
    console.log('El server está funcionando en http://localhost:6677!');
});