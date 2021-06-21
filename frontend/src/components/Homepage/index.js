import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getQuestions } from '../../store/questions';
import QuestionContainer from '../QuestionContainer';

import './Homepage.css';

const Homepage = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => Object.values(state.questions));

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  return (
    <div>
      <div className='page-container'>
        <QuestionContainer />
      </div>
    </div>
  );
};

export default Homepage;
