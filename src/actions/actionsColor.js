import { ADD_COLOR, LOAD_COLORS, REMOVE_COLOR, TOGGLE_LOADING } from '../types';
import { v4 } from 'uuid';

export const addColor = ({ id, ...data }) => {
  return {
    type: ADD_COLOR,
    payload: {
      id: id || v4(),
      ...data,
    },
  };
};

export const onRemove = (id) => {
  return {
    type: REMOVE_COLOR,
    payload: id,
  };
};

export const loadColors = (data) => {
  return {
    type: LOAD_COLORS,
    payload: data
  }
}

