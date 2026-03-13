const express = require('express');
const logger =require('morgan') ;
const bodyParser = require('body-parser');
//TIPO DE SERVIDOR QUE REALIZAMOS
const http = require('http');
const { parse } = require('path');
//  INICIAR Y CONFIGURAR EXPRESS
const app = express();
//LOG MOSTRAR INFORMACIÓN EN CONSOLA
app.use(logger('dev'));
// PARSEAR LAS ENTRADAS DE SOLICITUD DE DATOS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//CONFIGIRAR LAS RUTAS DE BIENVENIDA
app.get('/', (req, res)=> res.status(200).send({
    message: 'Bienvenido a la API REST  de compras',
}))

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port',port);
const server =http.createServer(app);
server.listen(port);

module.exports = app;

