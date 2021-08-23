import { useSelector } from 'react-redux';
import './ActionBar.css';
import { useEffect } from 'react';

const ActionBar = ({ showComments, id, question }) => {
  const numberOfComments =
    question?.Comments.length > 0 ? question?.Comments.length : 0;

  useEffect(() => {}, [showComments]);

  return (
    <div className='action-bar-container'>
      {/* <div className='action-bar-vote-btn'>
        <button type='submit' className='vote upvote'>
          <i className='fas fa-angle-up fa-2x'></i>
        </button>
        <p>10</p>
        <button className='vote downvote'>
          <i class='fas fa-angle-up fa-2x rotate-180'></i>
        </button>
      </div> */}
      <div
        id={id}
        onClick={(e) => showComments(Number(e.target.id))}
        className='comment-btn'
      >
        <i id={id} className='far fa-comment fa-lg'></i>
        <div id={id} className='comment-number'>
          {numberOfComments}
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
