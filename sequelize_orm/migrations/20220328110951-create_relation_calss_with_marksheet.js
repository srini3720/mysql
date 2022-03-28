"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addConstraint("marksheets", {
      fields: ["class_id"],
      type: "foreign key",
      name: "class_with_marksheet_association",
      references: {
        table: "classes",
        field: "class_id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeConstraint("marksheets", {
      fields: ["class_id"],
      type: "foreign key",
      name: "class_with_marksheet_association",
      references: {
        table: "classes",
        field: "class_id",
      },
    });
  },
};
