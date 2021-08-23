import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import questionsReducer from './questions';
import usersReducer from './user';
import searchReducer from './search';
import answersReducer from './answers';
import topAnswersReducer from './topanswers';
import commentsReducer from './comments';

const rootReducer = combineReducers({
  session: sessionReducer,
  questions: questionsReducer,
  users: usersReducer,
  search: searchReducer,
  answers: answersReducer,
  topAnswers: topAnswersReducer,
  comments: commentsReducer,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  // const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
