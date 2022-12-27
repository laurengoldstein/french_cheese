"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cheeses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      milkType: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING),
        field: "milk_type",
      },
      description: {
        type: Sequelize.TEXT,
        field: "description",
      },
      overallRating: {
        type: Sequelize.INTEGER,
        field: "overall_rating",
      },
      image: {
        type: Sequelize.STRING,
        field: "image",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("cheeses");
  },
};
