export const logger = (store) => (next) => (action) => {
  console.group();
  console.log('DISPATCHING', action.type);
  const result = next(action);
  console.log('new', store.getState());
  console.groupEnd();
  return result;
};

export const reduxDevTools = () =>
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f;
