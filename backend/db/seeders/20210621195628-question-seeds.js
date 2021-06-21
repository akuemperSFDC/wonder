'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      'Questions',
      [
        {
          ownerId: 1,
          title: 'What were the top 5 scientific breakthroughs of 2015?',
          description:
            'Feel free to add more than 5!',
          upvoteCount: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 2,
          title: 'What are the benefits of lemon?',
          description: '',
          upvoteCount: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 1,
          title: 'What’s the timeline for a person who starts training at 19 with a year of kickboxing to make it to the UFC or Bellator?',
          description: '',
          upvoteCount: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 3,
          title: 'Is 3 cups of spinach a day too much?',
          description: '',
          upvoteCount: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 2,
          title: 'Why is fish healthier than other meats?',
          description: '',
          upvoteCount: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 1,
          title: 'What goes with tacos other than rice? Which side dishes do you like?',
          description: '',
          upvoteCount: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 1,
          title: 'Can we build muscle after 45?',
          description: '',
          upvoteCount: 0,
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
    return queryInterface.bulkDelete('Questions', null, {});
  },
};
