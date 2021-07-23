'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cor.init({
    idCor: DataTypes.NUMBER,
    cor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cor',
  });
  return Cor;
};