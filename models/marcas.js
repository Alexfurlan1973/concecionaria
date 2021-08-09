'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Marcas extends Model {

    static associate(models) {
      // define association here
    }
  };

  Marcas.init({
    idMarca: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    marca: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Marcas',
  });
  return Marcas;
};