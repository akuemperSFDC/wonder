import UserInfo from '../UserInfo';
import QuestionArea from '../QuestionArea';
import TopAnswer from '../TopAnswer';
import ActionBar from '../ActionBar';
import CommentBar from '../CommentBar';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getQuestions } from '../../store/questions';
import './QuestionBox.css';

const QuestionBox = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => Object.values(state.questions));
  const text = useSelector((state) => state.search.text);

  const [isOpen, setIsOpen] = useState(-1);

  const showComments = (i) => {
    setIsOpen(isOpen === i ? -1 : i);
  };

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  return (
    <div className='question-box-container'>
      {questions
        .filter((q) => {
          if (text === '') {
            return q;
          } else if (q.title.toLowerCase().includes(text.toLowerCase())) {
            return q;
          }
        })
        .map((question, i) => (
          <div className='question-link'>
            <div className='question-box'>
              <UserInfo question={question} key={question.User.id} />
              <QuestionArea question={question} key={question.id + 100} />
              <TopAnswer
                question={question}
                qId={question.id}
                key={question.id}
              />
              <ActionBar
                id={i}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                showComments={showComments}
                question={question}
                qId={question.id}
                key={question.id}
              />
              <CommentBar
                id={i}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                showComments={showComments}
                question={question}
                qId={question.id}
                key={question.id}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default QuestionBox;
