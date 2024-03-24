import { ADD_USER } from '../types';
const userReducer = (state = [], { type, payload }) => {
  if (type === ADD_USER) {
    return payload;
  }
  return state;
};

export default userReducer;
