// Añadimos la url del server del socket y forzamos la conexión
var socket = io.connect('http://192.168.0.21:6677', { 'forceNew':true});