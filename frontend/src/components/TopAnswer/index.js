import './TopAnswer.css';
import ShowMoreText from 'react-show-more-text';
import { useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/user';
import { getAnswers } from '../../store/answers';
import { setTopAnswers } from '../../store/topanswers';

const TopAnswer = ({ question, qId, setTopAnswerId }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => Object.values(state.users));
  const answers = useSelector((state) => Object.values(state.answers));
  const currentUser = useSelector((state) => state.session.user);

  // THIS WILL NOT WORK WHEN I TRY ACTUALLY SORTING LINE 14 COMPARES IT TO ITSELF
  // let topAnswer;
  // if (Number(question.id) === Number(qId)) {
  //   topAnswer = question?.Answers[0];
  // }

  // let topAnswer = answers.find(
  //   (answer) => answer.questionId === qId && answer.userId !== currentUser.id
  // );

  let topAnswer = answers.find((answer) => {
    if (
      answer.questionId === qId &&
      answer.userId !== answer.Question.ownerId
    ) {
      return answer;
    } else {
      return undefined;
    }
  });

  // console.log(topAnswer);
  // const handleSetTopAnswerId = () => {
  //   setTopAnswerId(topAnswer?.id);
  // };

  // handleSetTopAnswerId();

  // console.log(topAnswer);

  const [topAnswerUser] = users.filter(
    (user) => user?.id === topAnswer?.userId
  );

  useEffect(() => {
    dispatch(getUsers());
    dispatch(setTopAnswers(topAnswer));
  }, [dispatch, topAnswer]);

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
          width={500}
        >
          <div>{topAnswer?.answer}</div>
        </ShowMoreText>
        <div className='answer-author'>
          <p>
            Answered by {topAnswerUser?.username} on{' '}
            {moment(topAnswer?.createdAt).format('ddd, hA')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopAnswer;
