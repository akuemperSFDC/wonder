import { csrfFetch } from './csrf';

// Action type as constant
const SEARCH = 'search/SEARCH';

// Action creator
const setSearch = (value, text) => ({
  type: SEARCH,
  value,
  text,
});

// Thunk;
export const getSearches = (val) => async (dispatch) => {
  const res = await csrfFetch('/api/questions/search/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ val }),
  });
  const { questions, text } = await res.json();

  dispatch(setSearch(questions, text));
};

const initialState = { value: '' };

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      const { value } = action;
      const { text } = action;
      const newState = {
        ...state,
        value,
        text,
      };

      return newState;
    default:
      return state;
  }
};

export default searchReducer;
