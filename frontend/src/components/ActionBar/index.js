import AnswerForm from '../AnswerForm';

import { useEffect } from 'react';

import './ActionBar.css';

const ActionBar = ({ question, qId, isOpen, setIsOpen, showComments, id }) => {

  return (
    <div className='action-bar-container'>
      {/* <div className='action-bar-vote-btn'>
        <button type='submit' className='vote upvote'>
          <i class='fas fa-angle-up fa-2x'></i>
        </button>
        <p>10</p>
        <button className='vote downvote'>
          <i class='fas fa-angle-up fa-2x rotate-180'></i>
        </button>
      </div> */}
      <div className='comment-btn'>
        <div className='comment-icon'>
          <i
            id={id}
            onClick={(e) => showComments(Number(e.target.id))}
            class='far fa-comment'
          ></i>
        </div>
        <div className='comment-number'>1</div>
      </div>
    </div>
  );
};

export default ActionBar;
