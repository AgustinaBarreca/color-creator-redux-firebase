import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { logger, reduxDevTools } from './middleware';
const customMiddleware = applyMiddleware(logger, thunk);

const store = createStore(
  rootReducer,
  compose(customMiddleware, reduxDevTools())
);
export default store;
