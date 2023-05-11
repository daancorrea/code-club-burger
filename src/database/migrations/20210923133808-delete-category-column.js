"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Products", "category");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.createColumn("Products", {
      category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
};
