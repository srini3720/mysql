"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addConstraint("students", {
      fields: ["class_id"],
      type: "foreign key",
      name: "class_association",
      references: {
        table: "classes",
        field: "class_id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeConstraint("students", {
      fields: ["class_id"],
      type: "foreign key",
      name: "class_association",
      references: {
        table: "classes",
        field: "class_id",
      },
    });
  },
};
