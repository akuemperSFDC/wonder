const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { restoreUser } = require('../../utils/auth');
const { Question, User, Answer } = require('../../db/models');

router.get(
  '/',
  restoreUser,
  asyncHandler(async (req, res) => {
    const questions = await Question.findAll({ include: [User, Answer] });
    res.json(questions);
  })
);

// router.get(
//   '/:id',
//   restoreUser,
//   asyncHandler(async (req, res) => {
//     const id = req.params.id;
//     const question = await Question.findByPk(id, {
//       include: [User, Answer],
//     });
//     res.json(question);
//   })
// );

module.exports = router;
