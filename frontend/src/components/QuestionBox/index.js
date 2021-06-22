import UserInfo from '../UserInfo';
import QuestionArea from '../QuestionArea';
import { useSelector } from 'react-redux';
import './QuestionBox.css';

const QuestionBox = () => {
  const questions = useSelector((state) => Object.values(state.questions));

  return (
    <div>
      {questions.map((question) => (
        <div className='question-box'>
          <UserInfo question={question} key={question.id} />
          <QuestionArea question={question} key={question.id} />
        </div>
      ))}
    </div>
  );
};

export default QuestionBox;
