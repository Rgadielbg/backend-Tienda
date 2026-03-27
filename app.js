requiere('dotenv').config();
require('./routes')(app);

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');

// INICIAR Y CONFIGURAR EXPRESS
const app = express();

// LOG PARA MOSTRAR INFORMACIÓN EN CONSOLA
app.use(logger('dev'));

// PARSEAR LAS ENTRADAS DE SOLICITUD DE DATOS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// RUTA DE BIENVENIDA
app.get('/', (req, res) =>
  res.status(200).send({
    message: 'Bienvenido a la API REST de compras',
  })
);

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

module.exports = app;