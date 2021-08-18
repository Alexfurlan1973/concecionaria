'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Marcas extends Model {    
    static associate(models) {
      this.hasMany(models.Veiculos, {
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
  }, {
    sequelize,
    modelName: 'Marcas',
  });
  return Marcas;
};
