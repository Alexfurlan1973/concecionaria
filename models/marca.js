'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Marca extends Model {    
    static associate(models) {
      this.belongsTo(models.Veiculo, {
        foreignKey: 'idVeiculo',
        id: 'idMarca'
      })
    }
  };

  Marca.init({
    idMarca: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    marca: DataTypes.STRING,
    idVeiculo: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Veiculo'
      },
    }
  }, {
    sequelize,
    modelName: 'Marca',
  });
  return Marca;
};