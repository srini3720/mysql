
"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "students",
      [
        {
          name: "sean",
          roll_no:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "solam",
          roll_no:2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "selva",
          roll_no:3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "raaj",
          roll_no:4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "kamlkumar",
          roll_no:5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "arun",
          roll_no:6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "vetri",
          roll_no:7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "roja",
          roll_no:8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "kamal",
          roll_no:9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "khan",
          roll_no:10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("students", null, {});
  },
};
