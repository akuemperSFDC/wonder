import { useEffect, useState } from 'react';
import { submitAnswer, getAnswers } from '../../store/answers';
import { useSelector, useDispatch } from 'react-redux';
import { getOneUser } from '../../store/user';

import './CommentBar.css';

const CommentBar = ({ id, isCommentsOpen, question }) => {
  const currentUserId = useSelector((state) => state.session.user.id);
  const users = useSelector((state) => Object.values(state.users));
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState('');
  const userId = currentUserId;
  const questionId = Number(question.id);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (answer.length === 0) return;

    const comment = {
      userId,
      questionId,
      answer,
    };

    setAnswer('');

    dispatch(submitAnswer(comment));
    dispatch(getAnswers());
  };

  const handleOnChange = (e) => {
    setAnswer(e.target.value);
  };

  useEffect(() => {
    dispatch(getOneUser(currentUserId));
  }, [dispatch, currentUserId]);

  const currUser = users.find((user) => user.id === currentUserId);

  return (
    <div
      className={`comment-bar-wrapper ${isCommentsOpen === id ? 'open' : ''}`}
    >
      <div>
        <img className='user-picture' src={currUser?.profileImgUrl} alt='' />
      </div>

      <form className='input-container' onSubmit={handleSubmit}>
        <input
          value={answer}
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
