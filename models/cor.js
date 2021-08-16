'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cores extends Model {
    static associate(models) {
      this.belongsTo(models.Veiculos, {
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
    idVeiculo: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Veiculos'
      },
    }
  }, {
    sequelize,
    modelName: 'Cores',
  });
  return Cores;
};
