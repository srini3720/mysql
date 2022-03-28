"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "depts",
      [
        {
          name: "EEE",
          course_code: "20EEE",
          section_no: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ECE",
          course_code: "20ECE",
          section_no: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ME",
          course_code: "20ME",
          section_no: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "IT",
          course_code: "20IT",
          section_no: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "MA",
          course_code: "20MA",
          section_no: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("depts", null, {});
  },
};
