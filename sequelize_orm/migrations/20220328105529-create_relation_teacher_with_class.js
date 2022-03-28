"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addConstraint("classes", {
      fields: ["class_mentor"],
      type: "foreign key",
      name: "teacher_association",
      references: {
        table: "teachers",
        field: "teacher_id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeConstraint("classes", {
      fields: ["class_mentor"],
      type: "foreign key",
      name: "teacher_association",
      references: {
        table: "teachers",
        field: "teacher_id",
      },
    });
  },
};
