'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define(
    'Answer',
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'Users' },
      },
      questionId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'Questions' },
      },
      answer: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {}
  );
  Answer.associate = function (models) {
    Answer.belongsTo(models.User, { foreignKey: 'userId' });
    Answer.belongsTo(models.Question, { foreignKey: 'questionId' });
  };
  return Answer;
};
