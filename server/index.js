// Cargamos express en una variable
var express = require('express');
// Llamamos al método express
var app = express();
// Cargamos el server http pasándole la app de express
var server = require('http').Server(app);
// Pasar la libreria de socket.io para trabajarlos
var io = require('socket.io')(server);

// Cargar una vista estática con un middleware
app.use(express.static('client')); // Se carga todos los html de client


app.get('/hola-mundo', function (req, res) {
    res.status(200).send('Hola mundo desde una ruta');
});

// Mensaje temporal para no usar bd
var messages = [{
    id: 1,
    texto: 'Bienvenido al chat en tiempo real de Socket.io y NodeJS de TxusBlack',
    nickname: 'Bot - TxusBlack'
}];

// Abrimos la conexión a nuestro socket
io.on('connection', function (socket) {
    console.log('El cliente con IP: ' + socket.handshake.address + ' se ha coenctado...');
    // Emitir a todos los clientes el mensaje
    socket.emit('messages', messages);
});

server.listen(6677, function () {
    console.log('El server está funcionando en http://localhost:6677!');
});