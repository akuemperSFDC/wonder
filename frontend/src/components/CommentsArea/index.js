import { useSelector, useDispatch } from 'react-redux';
import './CommentsArea.css';
import moment from 'moment';
import ShowMoreText from 'react-show-more-text';
import { getUserFromAnswerId } from '../../store/answers';
import { useEffect, useState } from 'react';
import { getQuestions } from '../../store/questions';
import { getAnswers } from '../../store/answers';

const CommentsArea = ({ id, isOpen, question }) => {
  const dispatch = useDispatch();
  const executeOnClick = (isExpanded) => {};
  const answers = useSelector((state) => Object.values(state.answers));

  const [answerId, setAnswerId] = useState(null);

  // useEffect(() => {
  //   dispatch(getUserFromAnswerId(answerId));
  // }, [dispatch, answerId]);

  return (
    <div className={`ca-wrapper ${isOpen === id ? 'open' : 'hidden'}`}>
      {answers
        .filter((answer) => {
          if (answer.questionId === question.id) {
            return answer;
          } else {
            return null;
          }
        })
        .map((answer) => (
          <div className='ca-container' key={answer.id}>
            <div className='ca-user-info'>
              <div>
                <img
                  className='ca-user-picture'
                  src='https://secure.img1-fg.wfcdn.com/im/02238154/compr-r85/8470/84707680/pokemon-pikachu-wall-decal.jpg'
                  alt=''
                />{' '}
              </div>
              <div className='user-specifics-container'>
                <div className='ca-user-specifics'>{answer.User.username}</div>
                <div className='comment-post-date'>
                  Posted {moment(answer.createdAt).format('ddd, hA')}
                </div>
              </div>
            </div>
            <ShowMoreText
              lines={3}
              more='(more)'
              less='(less)'
              className='answer-content-container'
              anchorClass='my-anchor-css-class'
              onClick={executeOnClick}
              expanded={false}
              width={560}
            >
              <div className='answer-content-container'>{answer.answer}</div>
            </ShowMoreText>
            <div className='vote-container'></div>
          </div>
        ))}
    </div>
  );
};

export default CommentsArea;
