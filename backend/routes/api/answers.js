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
    const answers = await Answer.findAll({ include: [Question] });
    res.json(answers);
  })
);

module.exports = router;
