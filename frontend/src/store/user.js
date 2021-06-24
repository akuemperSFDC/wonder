import { csrfFetch } from './csrf';

const SET_USERS = 'users/SET_USERS';
const SET_USER = 'users/SET_USER';

const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

const setUser = (user) => ({
  type: SET_USER,
  user,
});

export const getUsers = () => async (dispatch) => {
  const res = await csrfFetch('/api/users');
  const users = await res.json();

  dispatch(setUsers(users));
};

export const getOneUser = (id) => async (dispatch) => {
  const res = await csrfFetch('/api/users/one', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });

  const user = await res.json();

  dispatch(setUser(user));
};

const initialState = {};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      const allUsers = {};
      action.users.forEach((user) => {
        allUsers[user.id] = user;
      });
      return {
        ...state,
        ...allUsers,
      };
    case SET_USER:
      let user = action.user;
      user = { [user.id]: user };
      return {
        ...state,
        ...user,
      };
    default:
      return state;
  }
};

export default usersReducer;
