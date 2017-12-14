// Añadimos la url del server del socket y forzamos la conexión
var socket = io.connect('http://192.168.0.21:6677', { 'forceNew': true });

// Recibir el emit del server
socket.on('messages', function (data) {
    console.log(data);
    render(data);
});

// Mostrar el array de mensajes en el html
function render(data) {
    // Recorrer el array de objetos y obtener la info
    // El contenido que recoge lo guarda en message y el índice en index
    var html = data.map(function (message, index) {
        return (`
            <div class="message">
                <strong>${message.nickname}</strong> dice:
                <p>${message.texto}</p>
            </div>
        `);
    }).join(' ');

    document.getElementById('messages').innerHTML = html;
}