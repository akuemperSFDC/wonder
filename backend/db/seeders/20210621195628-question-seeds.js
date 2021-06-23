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
          description: 'Feel free to add more than 5!',
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
          title:
            'What’s the timeline for a person who starts training at 19 with a year of kickboxing to make it to the UFC or Bellator?',
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
          title:
            'What goes with tacos other than rice? Which side dishes do you like?',
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
        {
          ownerId: 2,
          title: "What food can't you eat no matter how hungry you are?",
          description: '',
          upvoteCount: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 2,
          title:
            'How is it humanly possible that out of over 100 TV channels over 24 hours there are only 2 programs I might watch? I simply cannot help but wonder why and who decides on the rubbish viewing?',
          description: '',
          upvoteCount: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 3,
          title:
            'Has there ever been a famous rock star who was never part of a band and has been a soloist for their entire career?',
          description: '',
          upvoteCount: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 1,
          title: 'Who is one pop music artist that you refuse to listen to?',
          description: '',
          upvoteCount: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 2,
          title: "What's the craziest thing to happen with stolen NASA stuff?",
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
