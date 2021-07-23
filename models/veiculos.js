'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Veiculos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Veiculos.init({
    idVeiculo: DataTypes.NUMBER,
    carro: DataTypes.STRING,
    placa: DataTypes.STRING,
    cambio: DataTypes.STRING,
    ano: DataTypes.STRING,
    km: DataTypes.STRING,
    motor: DataTypes.STRING,
    descricao: DataTypes.STRING,
    valor: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Veiculos',
  });
  return Veiculos;
};