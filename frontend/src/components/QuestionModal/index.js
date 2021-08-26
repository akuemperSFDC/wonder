import { useState } from 'react';
import { editOneQuestion } from '../../store/questions';
import { useDispatch } from 'react-redux';
import './QuestionModal.css';

const QuestionModal = ({ showModal, openModal, question }) => {
  const dispatch = useDispatch();
  const [updatedQuestion, setUpdatedQuestion] = useState('');
  const { id } = question;

  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdatedQuestion(e.target.value);
    const questionReq = {
      id,
      question,
      title: updatedQuestion,
    };

    dispatch(editOneQuestion(questionReq));
    // setSubmitAction('');
    openModal();
    // showUserOptions(-1);
  };

  return (
    <div
      className={`q-modal-wrapper ${
        showModal === true ? 'show-modal' : 'hide-modal'
      }`}
    >
      <div
        className={`question-modal-container ${
          showModal === true ? 'show-modal' : 'hide-modal'
        }`}
      >
        <div className='question-modal-banner'>
          <div type='submit' onClick={() => openModal()}>
            <i className='fal fa-times fa-lg'></i>
          </div>
          <p className='q-modal-banner-text'>Edit Question</p>
        </div>
        <form onSubmit={handleSubmit} className='q-modal-form-area'>
          <textarea
            onChange={(e) => setUpdatedQuestion(e.target.value)}
            cols='40'
            rows='5'
            className='q-modal-text-area'
          >
            {updatedQuestion}
          </textarea>
          <button className='q-modal-submit-btn' type='submit'>
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuestionModal;
