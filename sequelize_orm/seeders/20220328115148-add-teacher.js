"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "teachers",
      [
        {
          name: "selva",
          address: "erode",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "gowri",
          address: "erode",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "gopi",
          address: "erode",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "raja",
          address: "erode",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "velu",
          address: "erode",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("teachers", null, {});
  },
};
