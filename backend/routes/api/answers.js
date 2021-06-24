const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { restoreUser } = require('../../utils/auth');
const { Question, User, Answer } = require('../../db/models');
const { Op } = require('sequelize');

router.get(
  '/',
  restoreUser,
  asyncHandler(async (req, res) => {
    const answers = await Answer.findAll({
      order: [['createdAt', 'DESC']],
      include: [Question, User],
    });
    res.json(answers);
  })
);

router.post(
  '/',
  restoreUser,
  asyncHandler(async (req, res) => {
    const { userId, questionId, answer } = req.body.comment;

    const answerRes = await Answer.create({
      userId,
      questionId,
      answer,
    });

    await answerRes.save();

    res.json(answerRes);
  })
);

router.post(
  '/finduser',
  restoreUser,
  asyncHandler(async (req, res) => {
    const { id } = req.body;

    const user = await User.findOne({
      include: [
        {
          Model: Answer,
          where: { userId: Sequelize.col(id) },
        },
      ],
    });

    console.log(user);

    res.json(user);
  })
);

module.exports = router;
