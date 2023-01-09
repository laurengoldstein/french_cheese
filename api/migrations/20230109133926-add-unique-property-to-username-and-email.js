"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("users", {
      type: "unique",
      fields: ["email", "username"],
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("users", "email", {
      allowNull: false,
      type: Sequelize.STRING,
    });
    await queryInterface.changeColumn("users", "username", {
      allowNull: false,
      type: Sequelize.STRING,
      field: "username",
    });
  },
};
