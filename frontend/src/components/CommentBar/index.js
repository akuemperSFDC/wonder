import { useEffect, useState, useForceUpdate } from 'react';
import { submitAnswer } from '../../store/answers';
import { useSelector, useDispatch } from 'react-redux';
import { getAnswers } from '../../store/answers';

import './CommentBar.css';

const CommentBar = ({ id, isOpen, question, answers }) => {
  const currentUserId = useSelector((state) => state.session.user.id);
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState('');
  const userId = Number(question.User.id);
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

  useEffect(() => {}, [answer, dispatch]);

  return (
    <div className={`comment-bar-wrapper ${isOpen === id ? 'open' : 'hidden'}`}>
      <div>
        <img
          className='user-picture'
          src='https://secure.img1-fg.wfcdn.com/im/02238154/compr-r85/8470/84707680/pokemon-pikachu-wall-decal.jpg'
          alt=''
        />{' '}
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
