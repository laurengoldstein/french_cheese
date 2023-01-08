"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("locations", "city_coordinates", {
      type: Sequelize.GEOMETRY("POINT"),
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("locations", "city_coordinates");
  },
};
