import { useSelector, useDispatch } from 'react-redux';
import './CommentsArea.css';
import moment from 'moment';
import ShowMoreText from 'react-show-more-text';
import { getUserFromAnswerId, getAnswers } from '../../store/answers';
import { useEffect, useState } from 'react';
import { getQuestions } from '../../store/questions';
import { getUsers } from '../../store/user';

const CommentsArea = ({ id, isOpen, question, userSession }) => {
  const dispatch = useDispatch();
  const executeOnClick = (isExpanded) => {};
  const answers = useSelector((state) => Object.values(state.answers));
  const userFromAnswerId = useSelector((state) => state.user);
  const users = useSelector((state) => Object.values(state.users));

  const [answerId, setAnswerId] = useState(null);

  let targetUser = [];

  const trial = users.filter((user) => {
    return answers.filter(
      (answer) => Number(answer?.userId) === Number(user?.id)
    );
  });

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className={`ca-wrapper ${isOpen === id ? 'open' : 'hidden'}`}>
      {answers
        .filter((answer) => {
          if (answer.questionId === question.id) {
            // console.log('ANSWER', answer);
            return answer;
          } else {
            return null;
          }
        })
        .map((answer) => (
          <div className='ca-container' key={answer.id}>
            <div className='ca-user-info'>
              <div>
                {trial.forEach((user) => {
                  if (user.id === answer.userId) {
                    targetUser = [user.profileImgUrl.toString(), user.username];
                  }
                })}
                <img className='ca-user-picture' src={targetUser[0]} alt='' />
              </div>
              <div className='user-specifics-container'>
                <div className='ca-user-specifics'>{targetUser[1]}</div>
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
