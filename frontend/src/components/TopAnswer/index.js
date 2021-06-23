import './TopAnswer.css';
import ShowMoreText from 'react-show-more-text';

const TopAnswer = ({ question, qId }) => {
  let topAnswer;
  if (Number(question.id) === Number(qId)) {
    topAnswer = question.Answers[0].answer;
  }

  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };

  return (
    <div className='top-answer-wrapper'>
      <div className='top-answer-container'>
        <ShowMoreText
          lines={3}
          more='(more)'
          less='(less)'
          className='content-css top-answer-text'
          anchorClass='my-anchor-css-class'
          onClick={executeOnClick}
          expanded={false}
          width={560}
        >
          <div>{topAnswer}</div>
        </ShowMoreText>
        <div className='answer-author'>
          <p>Answered by {question.User.username} on date</p>
        </div>
      </div>
    </div>
  );
};

export default TopAnswer;
