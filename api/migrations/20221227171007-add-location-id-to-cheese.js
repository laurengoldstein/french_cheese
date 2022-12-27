"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("cheeses", "location_id", {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: "locations",
        },
        key: "id",
      },
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("cheeses", "location_id");
  },
};
