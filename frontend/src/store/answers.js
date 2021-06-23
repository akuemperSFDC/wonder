import { csrfFetch } from './csrf';

const SET_ANSWERS = 'answers/SET_ANSWERS';

const setAnswers = (answers) => ({
  type: SET_ANSWERS,
  answers,
});

export const getAnswers = () => async (dispatch) => {
  const res = await csrfFetch('/api/answers');
  const answers = await res.json();

  dispatch(setAnswers(answers));
};

const initState = {};

const answersReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ANSWERS:
      const allAnswers = {};
      action.answers.forEach((answer) => {
        allAnswers[answer.id] = answer;
      });
      return {
        ...state,
        ...allAnswers,
      };
    default:
      return state;
  }
};

export default answersReducer;
