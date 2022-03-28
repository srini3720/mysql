"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addConstraint("teachers", {
      fields: ["dept_id"],
      type: "foreign key",
      name: "dept_association",
      references: {
        table: "depts",
        field: "dept_id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeConstraint("teachers", {
      fields: ["dept_id"],
      type: "foreign key",
      name: "dept_association",
      references: {
        table: "depts",
        field: "dept_id",
      },
    });
  },
};
