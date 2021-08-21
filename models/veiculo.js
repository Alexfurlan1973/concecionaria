'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Veiculos extends Model {
    static associate(models) {
      this.belongsTo(models.Cores, {
        foreignKey: 'idVeiculo',
        targetKey: 'idCor'
      }),
      this.belongsTo(models.Marcas, {
        foreignKey: 'idVeiculo',
        targetKey: 'idMarca'
      }),
      this.belongsTo(models.Opcionais, {
        foreignKey: 'idVeiculo',
        targetKey: 'idOpcionais'
      }),
      this.belongsTo(models.Administradores, {
        foreignKey: 'idAdmin',
        targetKey: 'idAdmin'
      }),
      this.hasMany(models.urlImagens, {
        foreignKey: 'idUrlImagens',
        targetKey: 'idVeiculo'
      }),
      this.hasMany(models.veiculoOpcionais, {
        foreignKey: 'idVeiculo',
        id: 'idVeiculo'
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
    cambio: DataTypes.STRING,
    ano: DataTypes.STRING,
    km: DataTypes.STRING,
    motor: DataTypes.STRING,
    descricao: DataTypes.STRING,
    valor: DataTypes.STRING,
    idCor: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Cores'
      },
    },
    idMarca: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Marcas'
      },
    },
    idAdmin: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Administradores'
      },
    },
  }, {
    sequelize,
    modelName: 'Veiculos',
  });
  return Veiculos;
};
