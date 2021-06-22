import UserInfo from '../UserInfo';
import QuestionArea from '../QuestionArea';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getQuestions } from '../../store/questions';
import './QuestionBox.css';

const QuestionBox = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => Object.values(state.questions));

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  return (
    <div className='question-box-container'>
      {questions.map((question) => (
        <Link to={`/question/${question.id}`} className='question-link'>
          <div className='question-box'>
            <UserInfo question={question} key={question.id} />
            <QuestionArea question={question} key={question.id} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default QuestionBox;
