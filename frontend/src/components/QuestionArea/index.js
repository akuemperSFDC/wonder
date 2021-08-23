import './QuestionArea.css';
import { Link } from 'react-router-dom';

const QuestionArea = ({ question }) => {
  return (
    <Link to={`/question/${question.id}`} className='question-area'>
      <p className='question-text'>{question.title}</p>
    </Link>
  );
};

export default QuestionArea;
