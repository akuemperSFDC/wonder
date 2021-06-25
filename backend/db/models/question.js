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
    Question.hasMany(models.Answer, {
      onDelete: 'CASCADE',
      foreignKey: 'questionId',
      hooks: true,
    });
    Question.belongsTo(models.Topic, {
      onDelete: 'CASCADE',
      foreignKey: 'topicId',
      hooks: true,
    });
    Question.belongsTo(models.User, {
      // onDelete: 'CASCADE',
      foreignKey: 'ownerId',
      // hooks: true,
    });
  };
  return Question;
};
