"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addConstraint("marksheets", {
      fields: ["subject_id"],
      type: "foreign key",
      name: "subject_with_marksheet_association",
      references: {
        table: "subjects",
        field: "subject_id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeConstraint("marksheets", {
      fields: ["subject_id"],
      type: "foreign key",
      name: "subject_with_marksheet_association",
      references: {
        table: "subjects",
        field: "subject_id",
      },
    });
  },
};
