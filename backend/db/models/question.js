'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    'Question',
    {
      topicId: DataTypes.INTEGER,
      ownerId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      upvoteCount: DataTypes.INTEGER,
    },
    {}
  );
  Question.associate = function (models) {
    Question.hasMany(models.Answer, { foreignKey: 'questionId' });
    Question.belongsTo(models.Topic, { foreignKey: 'topicId' });
    Question.belongsTo(models.User, { foreignKey: 'ownerId' });
  };
  return Question;
};
