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
          userId: 2,
          questionId: 1,
          upvoteCount: 0,
          answer:
            '1. HIV Vaccine, 2. Kepler-452b, 3. First Laboratory Grown Human Muscle, 4. Water on Mars, 5. First New Antibiotic in 30 Years, 6. First Man-made Leaf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          questionId: 1,
          upvoteCount: 0,
          answer: 'Lots of good stuff!',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          questionId: 1,
          upvoteCount: 0,
          answer: 'Cant think of anything atm',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          questionId: 2,
          upvoteCount: 0,
          answer:
            '1. Support Heart Health, 2. Help Control Weight, 3. Prevent Kidney Stones',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          questionId: 2,
          upvoteCount: 0,
          answer: 'They taste good squeezed into drinks',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          questionId: 3,
          upvoteCount: 0,
          answer:
            'That’s a little of a toss up somewhat. That’s because in the heavy weight class there are fewer fighters and so the path for many of them is shorter somewhat than in your middle and lighter weight classes especially when you get below light heavy weight. Also you are seeing a greater influx now of new talent from eastern European countries as well as China and even your South-west Asian countries as well now. Most states require you to have two years of training or a back ground in a martial or fighting art before you can be granted an amateur license. That would put you at 20–21 years of age just for that and then figure four amateur fights which is what many states require for a pro license then you are looking at another two years based on fighting every six months on some card and no breaks due to injury or other things. So that would put you at 23 years of age or so. Then if you had a couple of pro fights and won them in significant fashion plus had a good record as an amateur you might make it for getting signed to fight on the undercard and in the prelims if you are lucky. The lighter the weight class the longer and more fights you would need and significant wins for the majority since there are more fighters at the lighter weight classes. It could easily take you another 2–3 years to establish yourself as a really good pro fighter that someone wants to put on a major card in the prelims. So that would then put you at 25–26 years of age.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          questionId: 4,
          upvoteCount: 0,
          answer: 'No it is not.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          questionId: 5,
          upvoteCount: 0,
          answer:
            'The fat content of fish is relatively low compared with animal meats, and the content of unsaturated fatty acids (it stabilizes the function of human cells by balancing the relative fluidity of cell membranes, so the benefits are systemic) is relatively high. Appropriate eating of fish can prevent diseases such as abnormal blood lipids, cardiovascular and cerebrovascular diseases.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          questionId: 6,
          upvoteCount: 0,
          answer:
            "You can't beat refried beans and fresh guacamole and chips to be served along with Mexican rice. Tacos will love you",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          questionId: 7,
          upvoteCount: 0,
          answer:
            'The answer is YES!  A positive mindset and determination are the vital ingredients to successfully build muscle, whatever your age.Recent studies have shown that people who reach middle age in good health can look forward to a longer, healthier and better quality life.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          questionId: 8,
          upvoteCount: 0,
          answer:
            'Balut - a filipine delicacy - A balut is a fertilized bird egg (usually a duck) which is incubated for a period of 14 to 21 days, depending on the local culture, and then steamed. The contents are eaten directly from the shell. Balut that is incubated for longer periods have a well-developed embryo and the features of the duckling are recognizable. The partially-developed embryo bones are soft enough to chew and swallow as a whole. The mallard duck (Anas platyrhynchus), also known as the "Pateros duck", is considered to be the most important breed for egg production to make balut.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          questionId: 9,
          upvoteCount: 0,
          answer:
            'Humans can be very selective. They also tend to have a hard time selecting any option when they have more than about 7. With too many options, people may choose none, or apply rules to remove all but a few shortlisted possibilities. If someone is removing possibilities from a long list, it can be easy to see all possibilities as lacking in some way, and remove them all.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          questionId: 10,
          upvoteCount: 0,
          answer:
            'Joe Satriani comes to mind. Even though he has recently played with Michael Anthony and Sammy Hagar in Chickenfoot (a short-lived, unheralded party band), he has never recorded or toured with a major act (I have a hard time qualifying his brief stint in 1993 with Deep Purple to be considered a major contribution, or anything resembling membership).',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          questionId: 11,
          upvoteCount: 0,
          answer:
            "Demi Lovato. Her music is boring. I’ve only listened to one or two of her songs and needless to say I wasn't wowed at all. Based off other people’s reviews I can say that the rest of her discography isn't any better.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          questionId: 12,
          upvoteCount: 0,
          answer:
            "So, you might not believe this, but there's an Alien race living close to the so-called stellar-mass black hole Cygnus X-1. They've got crazily advanced technology. However, there's an Achilles heel to it. Here's a metaphor to give you the idea: My grandpa was able to self-repair 95% of the issues with his car. With all the electronics involved, I'm able to self-repair 0.1% of mine. But my car is a thousand times more comfortable and safe. Now, when you compare technology available in 2021 and the one they had for Apollo 11 (1969), you would think landing on the moon should be something we can all do every other weekend. And yet, we barely make it to the ISS. Apollo 11 was the pinnacle of the low-key engineering my grandpa used to repair his car. Exactly the technology these Aliens needed to win the intergalactic war against the forces of evil. But they have a strict non-interference policy, so they couldn't come to Earth and steal the technology. However, they also have excellent intergalactic lawyers able to find a loophole in any policy. (These lawyers are even better than Andrew Weill.) So, they landed on the moon first. They weren't interfering as nobody was there. And when Neil Armstrong and Edwin Aldrin set foot on the moon, they hypnotized them and stole all the NASA knowledge they could from them. Thanks to this stolen NASA low-key engineering knowledge, the Aliens won the intergalactic war against the forces of evil.",
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
