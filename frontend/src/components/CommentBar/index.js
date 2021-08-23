import { useEffect, useState } from 'react';
import { submitComment, getComments } from '../../store/comments';
import { useSelector, useDispatch } from 'react-redux';
import { getOneUser } from '../../store/user';
import { getQuestions } from '../../store/questions';

import './CommentBar.css';

const CommentBar = ({ id, isCommentsOpen, question }) => {
  const dispatch = useDispatch();

  const currentUserId = useSelector((state) => state.session.user.id);
  const users = useSelector((state) => Object.values(state.users));

  const userId = currentUserId;
  const questionId = Number(question.id);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (comment.length === 0) return;

    const cmt = {
      ownerId: userId,
      questionId,
      content: comment,
    };

    setComment('');
    dispatch(submitComment(cmt));
    dispatch(getQuestions());
  };

  const handleOnChange = (e) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    dispatch(getOneUser(currentUserId));
  }, [dispatch, currentUserId]);

  const currUser = users.find((user) => user.id === currentUserId);

  return (
    <div
      className={`comment-bar-wrapper ${
        isCommentsOpen === id ? 'open' : 'hidden'
      }`}
    >
      <div>
        <img className='user-picture' src={currUser?.profileImgUrl} alt='' />
      </div>

      <form className='input-container' onSubmit={handleSubmit}>
        <input
          value={comment}
          onChange={(e) => handleOnChange(e)}
          type='text'
          placeholder='Add a comment'
          className='comment-input'
        ></input>
        <button type='submit' className={`add-comment-btn`}>
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default CommentBar;
