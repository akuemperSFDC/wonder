const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { restoreUser } = require('../../utils/auth');
const { Question, User } = require('../../db/models');

router.get(
  '/',
  restoreUser,
  asyncHandler(async (req, res) => {
    const questions = await Question.findAll({ include: User });
    res.json(questions);
  })
);

module.exports = router;
