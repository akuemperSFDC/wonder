import { useEffect, useState } from 'react';
import { submitAnswer, getAnswers } from '../../store/answers';
import { useSelector, useDispatch } from 'react-redux';
import { getOneUser } from '../../store/user';

import './CommentBar.css';

const CommentBar = ({ id, isOpen, question }) => {
  const currentUserId = useSelector((state) => state.session.user.id);
  const answers = useSelector((state) => Object.values(state.answers));
  const users = useSelector((state) => Object.values(state.users));
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState('');
  const userId = currentUserId;
  const questionId = Number(question.id);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.value === '') return;

    const comment = {
      userId,
      questionId,
      answer,
    };

    setAnswer('');

    dispatch(submitAnswer(comment));
    dispatch(getAnswers());
  };

  useEffect(() => {
    dispatch(getOneUser(currentUserId));
  }, [answer, dispatch, currentUserId]);

  const currUser = users.find((user) => user.id === currentUserId);

  return (
    <div className={`comment-bar-wrapper ${isOpen === id ? 'open' : 'hidden'}`}>
      <div>
        <img className='user-picture' src={currUser?.profileImgUrl} alt='' />
      </div>

      <form className='input-container' onSubmit={handleSubmit}>
        <input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          type='text'
          placeholder='Add a comment'
          className='comment-input'
        ></input>
        <button className='add-comment-btn' type='submit'>
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default CommentBar;
