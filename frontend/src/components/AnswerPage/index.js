import { useParams } from 'react-router-dom';
import { getQuestions } from '../../store/questions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const AnswerPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const questions = useSelector((state) => Object.values(state.questions));
  const q = questions.find((question) => question.id === parseInt(id));
  console.log(q);

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  return (
    <div>
      <p>{q.Answers[0].answer}</p>
    </div>
  );
};

export default AnswerPage;
