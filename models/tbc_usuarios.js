'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbc_usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbc_usuarios.init({
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    telefono: DataTypes.STRING,
    rol: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbc_usuarios',
  });
  return tbc_usuarios;
};