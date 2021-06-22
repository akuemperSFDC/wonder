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
          profileImgUrl: '/images/1.svg',
        },
        {
          email: faker.internet.email(),
          username: 'FakeUser1',
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          profileImgUrl: '/images/2.svg',
        },
        {
          email: faker.internet.email(),
          username: 'FakeUser2',
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          profileImgUrl: '/images/3.svg',
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
