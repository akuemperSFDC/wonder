import { csrfFetch } from './csrf';

// Action type as constant
const SET_TOP_ANSWERS = 'questions/SET_TOP_ANSWERS';

// Action creator
export const setTopAnswers = (topAnswer) => ({
  type: SET_TOP_ANSWERS,
  topAnswer,
});

const initialState = {};

const topAnswersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOP_ANSWERS:
      const { topAnswer } = action;
      let updatedState = {};
      if (topAnswer) {
        updatedState = { ...state, [topAnswer.id]: topAnswer };
      } else {
        updatedState = { ...state };
      }
      return updatedState;
    default:
      return state;
  }
};

export default topAnswersReducer;
