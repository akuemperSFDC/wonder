const Commenter = () => {
  return (
    <div className='user-options box-arrow-right'>
      <button type='submit' className='edit-comment-button user-option-btn'>
        Edit
      </button>
      <button type='submit' className='delete-comment-button user-option-btn'>
        Delete
      </button>
    </div>
  );
};

export default Commenter;
