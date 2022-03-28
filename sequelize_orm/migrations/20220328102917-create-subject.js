"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("subjects", {
      subject_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11),
      },
      name: {
        type: Sequelize.STRING(45),
      },
      course_code: {
        type: Sequelize.STRING(45),
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
    await queryInterface.dropTable("subjects");
  },
};
"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("subjects", {
      subject_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11),
      },
      name: {
        type: Sequelize.STRING(45),
      },
      course_code: {
        type: Sequelize.STRING(45),
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
    await queryInterface.dropTable("subjects");
  },
};
