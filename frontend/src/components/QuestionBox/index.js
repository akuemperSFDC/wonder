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
  const text = useSelector((state) => state.search.text);

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  return (
    <div className='question-box-container'>
      {questions
        .filter((q) => {
          if (text === '') {
            return q;
          } else if (q.title.toLowerCase().includes(text.toLowerCase())) {
            return q;
          }
        })
        .map((question, i) => (
          <Link to={`/question/${question.id}1`} className='question-link'>
            <div className='question-box'>
              <UserInfo question={question} key={question.User.id} />
              <QuestionArea question={question} key={i} />
            </div>
          </Link>
        ))}
    </div>
  );
};

export default QuestionBox;
