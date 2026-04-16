'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tbd_carritos_detalle extends Model {
    static associate(models) {}
  }

  tbd_carritos_detalle.init({
    id_carrito: DataTypes.INTEGER,
    id_producto: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    precio_unitario: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'tbd_carritos_detalle',
    tableName: 'tbd_carritos_detalle'
  });

  return tbd_carritos_detalle;
};