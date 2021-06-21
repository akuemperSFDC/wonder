'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      'Answers',
      [
        {
          userID: 2,
          questionId: 1,
          upvoteCount: 0,
          answer:
            '1. HIV Vaccine, 2. Kepler-452b, 3. First Laboratory Grown Human Muscle, 4. Water on Mars, 5. First New Antibiotic in 30 Years, 6. First Man-made Leaf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userID: 1,
          questionId: 2,
          upvoteCount: 0,
          answer:
            '1. Support Heart Health, 2. Help Control Weight, 3. Prevent Kidney Stones',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userID: 3,
          questionId: 3,
          upvoteCount: 0,
          answer:
            'That’s a little of a toss up somewhat. That’s because in the heavy weight class there are fewer fighters and so the path for many of them is shorter somewhat than in your middle and lighter weight classes especially when you get below light heavy weight. Also you are seeing a greater influx now of new talent from eastern European countries as well as China and even your South-west Asian countries as well now. Most states require you to have two years of training or a back ground in a martial or fighting art before you can be granted an amateur license. That would put you at 20–21 years of age just for that and then figure four amateur fights which is what many states require for a pro license then you are looking at another two years based on fighting every six months on some card and no breaks due to injury or other things. So that would put you at 23 years of age or so. Then if you had a couple of pro fights and won them in significant fashion plus had a good record as an amateur you might make it for getting signed to fight on the undercard and in the prelims if you are lucky. The lighter the weight class the longer and more fights you would need and significant wins for the majority since there are more fighters at the lighter weight classes. It could easily take you another 2–3 years to establish yourself as a really good pro fighter that someone wants to put on a major card in the prelims. So that would then put you at 25–26 years of age.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userID: 1,
          questionId: 4,
          upvoteCount: 0,
          answer: 'No it is not.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userID: 1,
          questionId: 5,
          upvoteCount: 0,
          answer:
            'The fat content of fish is relatively low compared with animal meats, and the content of unsaturated fatty acids (it stabilizes the function of human cells by balancing the relative fluidity of cell membranes, so the benefits are systemic) is relatively high. Appropriate eating of fish can prevent diseases such as abnormal blood lipids, cardiovascular and cerebrovascular diseases.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userID: 2,
          questionId: 6,
          upvoteCount: 0,
          answer:
            "You can't beat refried beans and fresh guacamole and chips to be served along with Mexican rice. Tacos will love you",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userID: 3,
          questionId: 7,
          upvoteCount: 0,
          answer:
            'The answer is YES!  A positive mindset and determination are the vital ingredients to successfully build muscle, whatever your age.Recent studies have shown that people who reach middle age in good health can look forward to a longer, healthier and better quality life.',
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
    return queryInterface.bulkDelete('Answers', null, {});
  },
};
