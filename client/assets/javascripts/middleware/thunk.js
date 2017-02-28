const thunk = ({ dispatch, getState }) => next => action => {
  debugger;
  if (typeof action === 'function') {
    return action(dispatch);
  }
  return next(action);
};

export default thunk;
