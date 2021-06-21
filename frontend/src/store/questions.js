import { csrfFetch } from './csrf';

// Action type as constant
const SET_QUESTIONS = 'questions/SET_QUESTIONS';

// Action creator
const setQuestions = (questions) => ({
  type: SET_QUESTIONS,
  questions,
});

// Thunk
export const getQuestions = () => async (dispatch) => {
  const res = await csrfFetch('/api/questions');
  const questions = await res.json();

  dispatch(setQuestions(questions));
};

const initialState = {};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      const allQuestions = {};
      action.questions.forEach((question) => {
        allQuestions[question.id] = question;
      });
      return {
        ...state,
        ...allQuestions,
      };
    default:
      return state;
  }
};

export default questionsReducer;
