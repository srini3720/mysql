"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addConstraint("marksheets", {
      fields: ["student_id"],
      type: "foreign key",
      name: "student_with_marksheet_association",
      references: {
        table: "students",
        field: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeConstraint("marksheets", {
      fields: ["student_id"],
      type: "foreign key",
      name: "student_with_marksheet_association",
      references: {
        table: "students",
        field: "id",
      },
    });
  },
};
