import { csrfFetch } from './csrf';

const SET_ANSWERS = 'answers/SET_ANSWERS';

const SET_USER = 'user/SET_USER';

const setAnswers = (answers) => ({
  type: SET_ANSWERS,
  answers,
});

const setUser = (user) => ({
  type: SET_USER,
  user,
});

export const getAnswers = () => async (dispatch) => {
  const res = await csrfFetch('/api/answers');
  const answers = await res.json();

  dispatch(setAnswers(answers));
};

export const submitAnswer = (comment) => async (dispatch) => {
  const res = await csrfFetch('/api/answers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ comment }),
  });

  const answers = await res.json();

  dispatch(setAnswers(answers));
};

export const getUserFromAnswerId = (id) => async (dispatch) => {
  const res = await csrfFetch('/api/answers/finduser', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });

  const user = await res.json();

  dispatch(setUser(user));
};

// export const deleteComment = () => async (dispatch) => {
//   const res = await csrfFetch('/api/answers/finduser', {
//     method: 'Delete',
//     headers: { 'Content-Type': 'application/json' },
//   });

//   const data = await res.json();

//   dispatch(setUser());
// };

const initState = {};

const answersReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ANSWERS:
      const allAnswers = [];
      const { answers } = action;
      answers.forEach((answer) => {
        allAnswers[answer.id] = answer;
      });
      return {
        ...state,
        ...allAnswers,
      };
    case SET_USER:
      const { user } = action;
      const newOb = {
        ...state,
        ...user,
      };
      return newOb;
    default:
      return state;
  }
};

export default answersReducer;
