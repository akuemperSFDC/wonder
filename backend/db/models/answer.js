'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define(
    'Answer',
    {
      userID: DataTypes.INTEGER,
      questionId: DataTypes.INTEGER,
      upvoteCount: DataTypes.INTEGER,
      answer: DataTypes.TEXT,
    },
    {}
  );
  Answer.associate = function (models) {
    Answer.belongsTo(models.User, { foreignKey: 'userId' });
    Answer.belongsTo(models.Question, { foreignKey: 'questionId' });
  };
  return Answer;
};
