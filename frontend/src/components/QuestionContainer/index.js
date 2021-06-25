import QuestionBox from '../QuestionBox';
import QuestionModal from '../QuestionModal';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './QuestionContainer.css';

const QuestionContainer = ({ showModal, openModal }) => {
  const sessionUser = useSelector((state) => state.session.user);
  if (sessionUser) {
    return (
      <div className='question-container'>
        <QuestionModal showModal={showModal} openModal={openModal} />
        <QuestionBox showModal={showModal} openModal={openModal} />
      </div>
    );
  } else {
    return <Redirect to='/login' />;
  }
};

export default QuestionContainer;
