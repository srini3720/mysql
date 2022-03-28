"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "marksheets",
      [
        {
          mark: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mark: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mark: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mark: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mark: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mark: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mark: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mark: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mark: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mark: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mark: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mark: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mark: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mark: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mark: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mark: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mark: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mark: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mark: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mark: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mark: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mark: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mark: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mark: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mark: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("marksheets", null, {});
  },
};
