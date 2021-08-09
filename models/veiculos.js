'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Veiculos extends Model {

    static associate(models) {
      // define association here
    }
  };

  Veiculos.init({
    idVeiculo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    carro: DataTypes.STRING,
    placa: DataTypes.STRING,
    cambio: DataTypes.STRING,
    ano: DataTypes.STRING,
    km: DataTypes.STRING,
    motor: DataTypes.STRING,
    descricao: DataTypes.STRING,
    valor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Veiculos',
  });
  return Veiculos;
};