'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Administrador extends Model {
    static associate(models) {
      this.hasMany(models.Veiculo, {
        foreignKey: 'idAdmin',
        id: 'idAdmin'
      })
    }
  };

  Administrador.init({
    idAdmin: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Administrador',
  });
  return Administrador;
};
