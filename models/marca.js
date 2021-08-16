'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Marcas extends Model {    
    static associate(models) {
      this.belongsTo(models.Veiculos, {
        foreignKey: 'idVeiculo',
        id: 'idMarca'
      })
    }
  };

  Marcas.init({
    idMarca: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    marca: DataTypes.STRING,
    idVeiculo: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Veiculos'
      },
    }
  }, {
    sequelize,
    modelName: 'Marcas',
  });
  return Marcas;
};
