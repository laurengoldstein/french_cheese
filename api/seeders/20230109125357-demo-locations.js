"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("locations", [
      {
        department: "Cote-d'Or",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        department: "Pyrenees-Atlantiques",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        department: "Herault",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("locations", null, {});
  },
};
