const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { restoreUser } = require('../../utils/auth');
const { Question, User, Answer, Comment } = require('../../db/models');

router.get(
  '/',
  restoreUser,
  asyncHandler(async (req, res) => {
    const comments = await Comment.findAll({
      include: [Question, User],
    });
    res.json(comments);
  })
);

router.post(
  '/questionId',
  restoreUser,
  asyncHandler(async (req, res) => {
    const { questionId } = req.body;
    const comments = await Comment.findAll({
      where: { questionId },
      include: [Question, User],
    });
    res.json(comments);
  })
);

router.post(
  '/',
  restoreUser,
  asyncHandler(async (req, res) => {
    const { ownerId, questionId, content } = req.body.comment;

    const commentRes = await Comment.create({
      ownerId,
      questionId,
      content,
    });

    await commentRes.save();

    res.json(commentRes);
  })
);

module.exports = router;
