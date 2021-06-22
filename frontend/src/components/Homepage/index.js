import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getQuestions } from '../../store/questions';
import QuestionContainer from '../QuestionContainer';
import TopicSidebar from '../TopicSidebar'

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
        <TopicSidebar />
        <QuestionContainer />
      </div>
    </div>
  );
};

export default Homepage;
