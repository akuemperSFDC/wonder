import { csrfFetch } from './csrf';

// Action type as constant
const SET_QUESTIONS = 'questions/SET_QUESTIONS';
const DELETE_QUESTION = 'questions/DELETE_QUESTION';
const EDIT_QUESTION = 'questions/EDIT_QUESTION';

// Action creator
const setQuestions = (questions) => ({
  type: SET_QUESTIONS,
  questions,
});

const deleteOneQuestion = (questionId) => ({
  type: DELETE_QUESTION,
  questionId,
});

const editQuestion = (question) => ({
  type: EDIT_QUESTION,
  question,
});

// Thunk
export const getQuestions = () => async (dispatch) => {
  const res = await csrfFetch('/api/questions');
  const questions = await res.json();

  dispatch(setQuestions(questions));
};

export const deleteQuestion = (id) => async (dispatch) => {
  await csrfFetch('/api/questions/', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });

  dispatch(deleteOneQuestion(id));
};

export const editOneQuestion = (question) => async (dispatch) => {
  const res = await csrfFetch('/api/questions/', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question }),
  });

  const questionResponse = await res.json();

  dispatch(editQuestion(questionResponse));
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
    case DELETE_QUESTION:
      delete state[action.questionId.id];
      return {
        ...state,
      };
    case EDIT_QUESTION:
      const { question } = action;
      const updatedState = { ...state, [question.id]: question };
      return updatedState;
    default:
      return state;
  }
};

export default questionsReducer;
