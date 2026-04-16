const db = require('../models');
const carritos_detalle = db.tbd_carritos_detalle;

module.exports = {

  create(req, res) {
    return carritos_detalle.create(req.body)
      .then(data => res.status(201).send(data))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return carritos_detalle.findAll()
      .then(data => res.status(200).send(data))
      .catch(error => res.status(400).send(error));
  },

  find(req, res) {
    return carritos_detalle.findByPk(req.params.id)
      .then(data => {
        if (!data) return res.status(404).send({ message: "No encontrado" });
        res.status(200).send(data);
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return carritos_detalle.update(req.body, {
      where: { id: req.params.id }
    })
    .then(result => res.status(200).send({ message: "Actualizado", result }))
    .catch(error => res.status(400).send(error));
  },

  delete(req, res) {
    return carritos_detalle.destroy({
      where: { id: req.params.id }
    })
    .then(result => res.status(200).send({ message: "Eliminado", result }))
    .catch(error => res.status(400).send(error));
  }

};