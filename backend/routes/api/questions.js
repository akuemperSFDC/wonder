const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { restoreUser } = require('../../utils/auth');
const { Question, User, Answer, Comment } = require('../../db/models');
const { Op } = require('sequelize');

router.get(
  '/',
  restoreUser,
  asyncHandler(async (req, res) => {
    const questions = await Question.findAll({
      include: [User, Answer, Comment],
    });
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

router.delete(
  '/',
  restoreUser,
  asyncHandler(async (req, res) => {
    const { id } = req.body.id;
    const question = await Question.findByPk(id);
    question.destroy();
    res.json(question);
  })
);

router.put(
  '/',
  restoreUser,
  asyncHandler(async (req, res) => {
    const { title } = req.body.question;
    const { id } = req.body.question;
    const questionRes = await Question.findByPk(id);

    if (title === questionRes.dataValues.title) {
      return questionRes;
    } else if (questionRes) {
      await questionRes.update({ ...questionRes.dataValues.title, title });
      res.json(questionRes);
    }
  })
);

router;

module.exports = router;
