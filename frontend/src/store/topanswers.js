import { csrfFetch } from './csrf';

const SET_TOP_ANSWERS = 'answers/SET_TOP_ANSWERS';

export const setTopAnswers = (topAnswers) => ({
  type: SET_TOP_ANSWERS,
  topAnswers,
});

const initState = {};

const topAnswersReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_TOP_ANSWERS:
      const { topAnswers } = action;
      const newObj = {
        ...state,
        ...{ topAnswers },
      };
      return newObj;
    default:
      return state;
  }
};

export default topAnswersReducer;
