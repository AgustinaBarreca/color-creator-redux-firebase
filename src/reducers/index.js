import { combineReducers } from 'redux';
import colorReducer from './colorReducer';
import userReducer from './userReducer';
import uiReducer from './uiReducer'

const rootReducer = combineReducers({
  colors: colorReducer,
  user: userReducer,
  ui: uiReducer
});

export default rootReducer;
