const QuestionArea = ({ question }) => {
  return (
    <div className='question-area'>
      <p className='question-text'>{question.title}</p>
    </div>
  );
};

export default QuestionArea;
