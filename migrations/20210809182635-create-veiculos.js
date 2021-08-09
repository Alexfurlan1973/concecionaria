'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Veiculos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idVeiculo: {
        type: Sequelize.INTEGER
      },
      carro: {
        type: Sequelize.STRING
      },
      placa: {
        type: Sequelize.STRING
      },
      cambio: {
        type: Sequelize.STRING
      },
      ano: {
        type: Sequelize.STRING
      },
      km: {
        type: Sequelize.STRING
      },
      motor: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      valor: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Veiculos');
  }
};