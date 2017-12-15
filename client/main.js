// Añadimos la url del server del socket y forzamos la conexión
var socket = io.connect('http://localhost:80', { 'forceNew': true });

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

    var div_msgs = document.getElementById('messages');
    div_msgs.innerHTML = html;
    div_msgs.scrollTop = div_msgs.scrollHeight;
}

function addMessage(e) {
    // Recojo los valores del html en un objeto
    var message = {
        nickname: document.getElementById('nickname').value,
        texto: document.getElementById('texto').value
    };

    document.getElementById('nickname').style.display = 'none';
    document.getElementById('texto').value = '';
    // Se lo emito al socket
    socket.emit('add-message', message);
    // Corto el proceso
    return false;
}