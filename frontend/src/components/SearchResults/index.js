import UserInfo from '../UserInfo';
import QuestionArea from '../QuestionArea';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSearches } from '../../store/search';

const SearchResults = () => {
  const dispatch = useDispatch();
  // const questions = useSelector((state) => Object.values(state.search.value));

  useEffect(() => {
    dispatch(getSearches());
  }, [dispatch]);

  return (
    <div className='question-box-container'>
      {/* {questions.map((question) => (
        <Link to={`/question/${question.id}`} className='question-link'>
          <div className='question-box'>
            <UserInfo question={question} key={question.User.id} />
            <QuestionArea question={question} key={question.id} />
          </div>
        </Link>
      ))} */}
    </div>
  );
};

export default SearchResults;
