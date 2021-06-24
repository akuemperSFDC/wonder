import UserInfo from '../UserInfo';
import QuestionArea from '../QuestionArea';
import TopAnswer from '../TopAnswer';
import ActionBar from '../ActionBar';
import CommentBar from '../CommentBar';
import CommentsArea from '../CommentsArea';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getQuestions } from '../../store/questions';
import { getAnswers } from '../../store/answers';
import './QuestionBox.css';

const QuestionBox = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => Object.values(state.questions));
  const text = useSelector((state) => state.search.text);
  const answers = useSelector((state) => Object.values(state.answers));

  const [isOpen, setIsOpen] = useState(-1);

  const showComments = (i) => {
    setIsOpen(isOpen === i ? -1 : i);
  };

  useEffect(() => {
    dispatch(getQuestions());
    dispatch(getAnswers());
  }, [dispatch]);

  return (
    <div className='question-box-container'>
      {questions
        .filter((q) => {
          if (text === '') {
            return q;
          } else if (q.title.toLowerCase().includes(text.toLowerCase())) {
            return q;
          } else {
            return null;
          }
        })
        .map((question, i) => (
          <div className='question-link' key={question.id}>
            <div className='question-box'>
              <UserInfo question={question} />
              <QuestionArea question={question} />
              <TopAnswer
                answers={answers}
                question={question}
                qId={question.id}
              />
              <ActionBar
                id={i}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                showComments={showComments}
                question={question}
                qId={question.id}
              />
              <CommentBar
                id={i}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                showComments={showComments}
                question={question}
                qId={question.id}
                answers={answers}
              />
              <CommentsArea
                id={i}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                showComments={showComments}
                question={question}
                qId={question.id}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default QuestionBox;
