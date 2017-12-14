// Cargamos express en una variable
var express = require('express');
// Llamamos al método express
var app = express();
// Cargamos el server http pasándole la app de express
var server = require('http').server(app);