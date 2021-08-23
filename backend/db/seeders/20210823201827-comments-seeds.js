'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      'Comments',
      [
        {
          answerId: 1,
          ownerId: 1,
          content: 'Super cool!',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answerId: 1,
          ownerId: 3,
          content: 'Nice!',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answerId: 1,
          ownerId: 3,
          content: 'Awesome!',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answerId: 1,
          ownerId: 2,
          content: 'Neat!',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Comments', null, {});
  },
};
