import {RECEIVE_SOURCES} from '../actions/source_actions';
import merge from 'lodash/merge';

const sourcesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_SOURCES:
      nextState = {};
      action.sources.forEach(source => nextState[source.id] = source);
      return nextState;
    default:
      return state;
  }

};

export default sourcesReducer;
