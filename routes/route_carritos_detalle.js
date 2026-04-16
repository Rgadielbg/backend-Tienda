module.exports = (app) => {
  const controller = require('../controllers/controller_carritos_detalle');

  app.post('/api/carrito-detalle', controller.create);
  app.get('/api/carrito-detalle', controller.list);
  app.get('/api/carrito-detalle/:id', controller.find);
  app.put('/api/carrito-detalle/:id', controller.update);
  app.delete('/api/carrito-detalle/:id', controller.delete);
};