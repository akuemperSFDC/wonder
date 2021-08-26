import { csrfFetch } from './csrf';

const SET_COMMENTS = 'comments/SET_COMMENTS';
const SET_COMMENT = 'comments/SET_COMMENT';

const setAllComments = (cmts) => ({
  type: SET_COMMENTS,
  cmts,
});

const setComment = (cmt) => ({
  type: SET_COMMENT,
  cmt,
});

export const getComments = (questionId) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments/questionId`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ questionId }),
  });

  const cmts = await res.json();

  dispatch(setAllComments(cmts));
};

export const submitComment = (comment) => async (dispatch) => {
  const res = await csrfFetch('/api/comments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ comment }),
  });

  const cmt = await res.json();

  dispatch(setComment(cmt));
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

const commentsReducer = (state = initState, action) => {
  let newState;
  switch (action.type) {
    case SET_COMMENTS:
      const { cmts } = action;
      const newComments = {};
      cmts.forEach((cmt) => {
        newComments[cmt.id] = cmt;
      });
      return { ...state, ...newComments };
    case SET_COMMENT:
      const { cmt } = action;
      const comment = {};
      comment[cmt?.id] = cmt;
      newState = { ...state, ...comment };
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
