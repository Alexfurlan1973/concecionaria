'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class urlImagens extends Model {

    static associate(models) {
      // define association here
    }
  };

  urlImagens.init({
    idUrlImagens: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    url: DataTypes.STRING,
    principal: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'urlImagens',
  });
  return urlImagens;
};