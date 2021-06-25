import QuestionContainer from '../QuestionContainer';
import TopicSidebar from '../TopicSidebar';
import QuestionModal from '../QuestionModal';
import { useState } from 'react';

import './Homepage.css';

const Homepage = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <div className='page-container'>
        <TopicSidebar />
        <QuestionContainer showModal={showModal} openModal={openModal} />
      </div>
    </div>
  );
};

export default Homepage;
