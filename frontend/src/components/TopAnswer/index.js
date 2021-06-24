import './TopAnswer.css';
import ShowMoreText from 'react-show-more-text';
import { useEffect } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { setTopAnswers } from '../../store/topanswers';

const TopAnswer = ({ answers, question, qId }) => {
  const dispatch = useDispatch();

  let topAnswer;

  if (Number(question.id) === Number(qId)) {
    topAnswer = question?.Answers[0]?.answer;
  }

  let userComments = answers.filter((a) => {
    if (
      a.questionId !== question.id &&
      question.userId === question?.User[0]?.id
    ) {
      return a?.User?.username;
    } else {
      return null;
    }
  });

  useEffect(() => {
    dispatch(setTopAnswers(question?.Answers.answer));
  }, [dispatch, topAnswer, question?.Answers.answer]);

  let username = userComments[0]?.User.username;

  const executeOnClick = (isExpanded) => {};

  return (
    <div className='top-answer-wrapper'>
      <div className='top-answer-container'>
        <ShowMoreText
          lines={3}
          more='(more)'
          less='(less)'
          className='content-css top-answer-text'
          anchorClass='my-anchor-css-class'
          onClick={executeOnClick}
          expanded={false}
          width={560}
        >
          <div>{topAnswer}</div>
        </ShowMoreText>
        <div className='answer-author'>
          <p>
            Answered by {username} on{' '}
            {moment(question?.Answers[0]?.createdAt).format('ddd, hA')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopAnswer;
