'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cores extends Model {
    static associate(models) {
      this.hasMany(models.Veiculos, {
        foreignKey: 'idVeiculo',
        id: 'idCor'
      })
    }
  };

  Cores.init({
    idCor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cor: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Cores',
  });
  return Cores;
};
