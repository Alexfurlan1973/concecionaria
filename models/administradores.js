'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Administradores extends Model {
    static associate(models) {
      this.hasMany(models.Veiculos, {
        foreignKey: 'idVeiculo',
        id: 'idAdmin'
      })
    }
  };

  Administradores.init({
    idAdmin: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    idVeiculo: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Veiculos'
      },
    }
  }, {
    sequelize,
    modelName: 'Administradores',
  });
  return Administradores;
};