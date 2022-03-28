'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('depts', {
      dept_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(11)
      },
      course_code: {
        type: Sequelize.STRING(11)
      },
      section_no: {
        type: Sequelize.INTEGER(11)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('depts');
  }
};