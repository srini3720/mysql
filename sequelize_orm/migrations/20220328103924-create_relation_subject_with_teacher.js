"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addConstraint("teachers", {
      fields: ["subject_id"],
      type: "foreign key",
      name: "subject_association",
      references: {
        table: "subjects",
        field: "subject_id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeConstraint("teachers", {
      fields: ["subject_id"],
      type: "foreign key",
      name: "subject_association",
      references: {
        table: "subjects",
        field: "subject_id",
      },
    });
  },
};
