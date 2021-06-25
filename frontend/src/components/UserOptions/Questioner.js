import { useState, useEffect } from 'react';
import { deleteQuestion, editOneQuestion } from '../../store/questions';
import { useDispatch } from 'react-redux';

const Questioner = ({ question, showUserOptions, showModal, openModal }) => {
  const dispatch = useDispatch();
  const [submitAction, setSubmitAction] = useState('');

  const id = question.id;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (submitAction === 'edit') {
      // const questionReq = {
      //   id,
      //   question,
      //   title: 'I CHANGED IT',
      // };

      // dispatch(editOneQuestion(questionReq));
      setSubmitAction('');
      openModal();
      showUserOptions(-1);
    } else if (submitAction === 'delete') {
      const id = question.id;

      const questionId = {
        id,
      };

      dispatch(deleteQuestion(questionId));
      setSubmitAction('');
      showUserOptions(-1);
    } else {
      return;
    }
  };

  const handleClickEdit = () => {
    setSubmitAction('edit');
  };

  const handleClickDelete = () => {
    setSubmitAction('delete');
  };

  useEffect(() => {}, [setSubmitAction]);

  return (
    <form onSubmit={handleSubmit}>
      <button
        onClick={handleClickEdit}
        type='submit'
        className='edit-comment-button user-option-btn'
      >
        Edit
      </button>
      <button
        onClick={handleClickDelete}
        type='submit'
        className='delete-comment-button user-option-btn'
      >
        Delete
      </button>
    </form>
  );
};

export default Questioner;
