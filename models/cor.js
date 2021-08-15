'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cor extends Model {
    static associate(models) {
      this.belongsTo(models.Veiculo, {
        foreignKey: 'idVeiculo',
        id: 'idCor'
      })
    }
  };

  Cor.init({
    idCor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cor: DataTypes.STRING,
    idVeiculo: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Veiculo'
      },
    }
  }, {
    sequelize,
    modelName: 'Cor',
  });
  return Cor;
};
