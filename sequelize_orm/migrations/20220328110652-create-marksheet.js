'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('marksheets', {
      marksheet_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      student_id: {
        type: Sequelize.INTEGER
      },
      class_id: {
        type: Sequelize.INTEGER
      },
      subject_id: {
        type: Sequelize.INTEGER
      },
      mark: {
        type: Sequelize.INTEGER
      },
      rank: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('marksheets');
  }
};