"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("teachers", {
      teacher_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      dept_id: {
        type: Sequelize.INTEGER,
      },
      subject_id: {
        type: Sequelize.INTEGER,
      },

      address: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("teachers");
  },
};
