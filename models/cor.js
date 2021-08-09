'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cor extends Model {
    static associate(models) {
      this.belongsTo(models.Veiculos, {
        foreignKey: 'idVeiculo',
        id: 'idCor'
      })
    }
  };

  Cor.init({
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
    modelName: 'Cor',
  });
  return Cor;
};
