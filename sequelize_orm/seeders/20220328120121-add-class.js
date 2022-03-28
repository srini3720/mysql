"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "classes",
      [
        {
          name: "20cse1a",
          strength: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "20cse1a",
          strength: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("classes", null, {});
  },
};
