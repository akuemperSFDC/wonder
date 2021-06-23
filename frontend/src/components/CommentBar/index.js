import './CommentBar.css';

const CommentBar = ({ question, qId, id, isOpen }) => {
  return (
    <div className={`comment-bar-wrapper ${isOpen === id ? 'open' : 'hidden'}`}>
      <div>
        <img
          className='user-picture'
          src='https://secure.img1-fg.wfcdn.com/im/02238154/compr-r85/8470/84707680/pokemon-pikachu-wall-decal.jpg'
          alt=''
        />{' '}
      </div>
      <div>
        <input
          type='text'
          placeholder='Add a comment'
          className='comment-input'
        ></input>
      </div>
      <div className='add-comment-btn'>Add Comment</div>
    </div>
  );
};

export default CommentBar;
