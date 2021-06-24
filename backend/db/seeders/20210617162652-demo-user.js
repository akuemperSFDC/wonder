'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'demo@user.io',
          username: 'Demo-lition',
          hashedPassword: bcrypt.hashSync('password'),
          profileImgUrl:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHNob3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
        {
          email: faker.internet.email(),
          username: 'FakeUser1',
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          profileImgUrl:
            'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHNob3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
        {
          email: faker.internet.email(),
          username: 'FakeUser2',
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          profileImgUrl:
            'https://images.unsplash.com/photo-1601931935821-5fbe71157695?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
        {
          email: 'ak@user.io',
          username: 'Test1',
          hashedPassword: bcrypt.hashSync('password'),
          profileImgUrl:
            'https://images.unsplash.com/photo-1523477800337-966dbabe060b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
        {
          email: 'akok@user.io',
          username: 'Test2',
          hashedPassword: bcrypt.hashSync('password'),
          profileImgUrl:
            'https://images.unsplash.com/photo-1617037448248-6bd7b4a0d038?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      'Users',
      {
        username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] },
      },
      {}
    );
  },
};
