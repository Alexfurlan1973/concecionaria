'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Opcionais extends Model {

    static associate(models) {
      // define association here
    }
  };

  Opcionais.init({
    idOpcionais: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    opcionais: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Opcionais',
  });
  return Opcionais;
};