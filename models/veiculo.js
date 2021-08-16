'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Veiculos extends Model {
    static associate(models) {
      this.hasMany(models.Cores, {
        foreignKey: 'idVeiculo',
        targetKey: 'idVeiculo'
      }),
      this.hasMany(models.Marcas, {
        foreignKey: 'idVeiculo',
        targetKey: 'idVeiculo'
      }),
      this.hasMany(models.Opcionais, {
        foreignKey: 'idVeiculo',
        targetKey: 'idVeiculo'
      }),
      this.hasMany(models.administradores, {
        foreignKey: 'idVeiculo',
        targetKey: 'idVeiculo'
      }),
      this.hasMany(models.urlImagens, {
        foreignKey: 'idUrlImagens',
        targetKey: 'idVeiculo'
      })
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
    valor: DataTypes.STRING,
    idUrlImagens: {
      type: DataTypes.INTEGER,
      references: {
        model: 'urlImagens'
      },
    }
  }, {
    sequelize,
    modelName: 'Veiculos',
  });
  return Veiculos;
};
