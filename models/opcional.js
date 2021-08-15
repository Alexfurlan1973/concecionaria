'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Opcionais extends Model {
    static associate(models) {
      this.belongsTo(models.Veiculo, {
        foreignKey: 'idVeiculo',
        id: 'idOpcionais'
      })
    }
  };

  Opcionais.init({
    idOpcionais: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    opcionais: DataTypes.STRING,
    idVeiculo: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Veiculo'
      },
    }
  }, {
    sequelize,
    modelName: 'Opcionais',
  });
  return Opcionais;
};