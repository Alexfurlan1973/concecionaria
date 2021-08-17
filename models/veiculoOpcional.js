'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class veiculoOpcionais extends Model {
    static associate(models) {
      this.belongsTo(models.Veiculos, {
        foreignKey: 'idVeiculo',
        targetKey: 'idVeiculoOpcionais'
      }),
      this.belongsTo(models.Opcionais, {
        foreignKey: 'idOpcionais',
        targetKey: 'idVeiculoOpcionais'
      })
    }
  };
  
  veiculoOpcionais.init({
    idVeiculoOpcionais: DataTypes.INTEGER,
    idVeiculo: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Veiculos'
      }
    },
    idOpcionais: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Opcioanis'
      }
    }
  }, {
    sequelize,
    modelName: 'veiculoOpcionais',
  });
  return veiculoOpcionais;
};
