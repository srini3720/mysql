"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addConstraint("students", {
      fields: ["dept_id"],
      type: "foreign key",
      name: "dept_wit_students_association",
      references: {
        table: "depts",
        field: "dept_id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeConstraint("students", {
      fields: ["dept_id"],
      type: "foreign key",
      name: "dept_wit_students_association",
      references: {
        table: "depts",
        field: "dept_id",
      },
    });
  },
};
