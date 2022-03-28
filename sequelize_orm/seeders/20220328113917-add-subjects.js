"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
  
    await queryInterface.bulkInsert(
      "subjects",
      [
        {
          name: "English",
          course_code: "ENG34",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tamil",
          course_code: "TAM34",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Physics",
          course_code: "PHY34",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maths",
          course_code: "MAT34",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chemistry",
          course_code: "CHEM34",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {


    await queryInterface.bulkDelete("subjects", null, {});
  },
};
