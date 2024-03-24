import { ADD_COLOR, REMOVE_COLOR, LOAD_COLORS } from '../types';

const colorReducer = (state = [], { type, payload }) => {
  if (type === ADD_COLOR) {
    return [...state, payload];
  }

  if (type === REMOVE_COLOR) {
    const colors = [...state];
    return colors.filter((color) => color.id !== payload.id);
  }

  if (type === LOAD_COLORS) {
    return [...state, ...payload];
  }

  return state;
};

export default colorReducer;
