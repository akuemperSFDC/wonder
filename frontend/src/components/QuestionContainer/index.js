import QuestionBox from '../QuestionBox';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SearchResults from '../SearchResults';

import './QuestionContainer.css';

const QuestionContainer = () => {
  const sessionUser = useSelector((state) => state.session.user);
  if (sessionUser) {
    return (
      <div className='question-container'>
        <QuestionBox />
      </div>
    );
  } else {
    return <Redirect to='/login' />;
  }
};

export default QuestionContainer;
