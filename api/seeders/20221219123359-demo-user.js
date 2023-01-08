"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("users", [
      {
        username: "mouse",
        email: "mouse@example.com",
        image:
          "https://effectivewildlifesolutions.com/wp-content/uploads/2017/01/EWS_Field_Mouse.jpeg",
        about: "Hi! I LOVE cheese, the stinkier the better!",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "homer",
        email: "homersimpson@example.com",
        image: "https://pngimg.com/uploads/simpsons/simpsons_PNG8.png",
        about: "My favorite cheeses pair well with Duff beer.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "madonna",
        email: "madonna@example.com",
        image:
          "http://images1.fanpop.com/images/photos/1400000/Madonna-madonna-1419390-2048-2560.jpg",
        about: "Cheesed for the very first time.",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  },
};
