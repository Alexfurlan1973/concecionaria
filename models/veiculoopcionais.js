'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class veiculoOpcionais extends Model {
    static associate(models) {
      this.belongsTo(models.Veiculos, {
        foreignKey: 'idVeiculo',
        targetKey: 'idVeiculo'
      }),
      this.belongsTo(models.veiculoOpcionais, {
        foreignKey: 'idVeiculo',
        targetKey: 'idVeiculo'
      })
    }
  };
  
  veiculoOpcionais.init({
    idVeiculoOpcionais: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'veiculoOpcionais',
  });
  return veiculoOpcionais;
};