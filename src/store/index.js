import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

const ColorReduxProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default ColorReduxProvider;
