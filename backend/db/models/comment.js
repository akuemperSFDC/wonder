'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment',
    {
      answerId: DataTypes.INTEGER,
      ownerId: DataTypes.INTEGER,
      content: DataTypes.STRING,
    },
    {}
  );
  Comment.associate = function (models) {
    Comment.belongsTo(models.Answer, { foreignKey: 'answerId' });
    Comment.belongsTo(models.User, { foreignKey: 'ownerId' });
  };
  return Comment;
};
