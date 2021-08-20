'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class urlImagens extends Model {
    static associate(models) {
      this.belongsTo(models.Veiculos, {
        foreignKey: 'idVeiculo',
        id: 'idUrlImagens'
      })
    }
  };

  urlImagens.init({
    idUrlImagens: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    url: DataTypes.STRING,
    principal: DataTypes.STRING,
    idVeiculo: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Veiculos'
      }
    },
  }, {
    sequelize,
    modelName: 'urlImagens',
  });
  return urlImagens;
};
