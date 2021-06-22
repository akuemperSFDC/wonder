import QuestionContainer from '../QuestionContainer';
import TopicSidebar from '../TopicSidebar';

import './Homepage.css';

const Homepage = () => {
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
