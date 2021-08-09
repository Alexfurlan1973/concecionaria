'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cor extends Model {

    static associate(models) {
      // define association here
    }
  };

  Cor.init({
    idCor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cor',
  });
  return Cor;
};