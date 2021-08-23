'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment',
    {
      questionId: DataTypes.INTEGER,
      ownerId: DataTypes.INTEGER,
      content: DataTypes.STRING,
    },
    {}
  );
  Comment.associate = function (models) {
    Comment.belongsTo(models.Question, { foreignKey: 'questionId' });
    Comment.belongsTo(models.User, { foreignKey: 'ownerId' });
  };
  return Comment;
};
