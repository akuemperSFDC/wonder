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
    const questions = await Question.findAll({ include: [User, Answer] });
    res.json(questions);
  })
);

router.post(
  '/search',
  restoreUser,
  asyncHandler(async (req, res) => {
    let { val } = req.body;
    const text = val;
    const questions = await Question.findAll({
      include: [Answer, User],
      where: {
        title: {
          [Op.like]: `%${text}%`,
        },
      },
    });
    res.json({ questions, text });
  })
);

module.exports = router;
