import {
  RECEIVE_FILTERS,
  TOGGLE_LANGUAGE,
  TOGGLE_CATEGORY,
  RESET_FILTERS
} from '../actions/filter_actions';
import merge from 'lodash/merge';

const initialState = {
  languages: {
    en: true,
    de: false,
    fr: false,
  },
  categories: {
    general: true,
    sport: false
  }
};

const reset = {
  languages: {
    en: true,
    de: false,
    fr: false,
  },
  categories: {
    general: true,
    sport: false
  }
}

const filtersReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_FILTERS:
      nextState = merge({}, state);
      // action.filters.forEach(filter => nextState[filter] = filter);
      return nextState;
    case TOGGLE_LANGUAGE:
      nextState = merge({}, state);
      nextState.languages[action.language] = !nextState.languages[action.language];
      return nextState;
    case TOGGLE_CATEGORY:
      nextState = merge({}, state);
      nextState.categories[action.category] = !nextState.categories[action.category];
      return nextState;
    case RESET_FILTERS:
      return reset;
    default:
      return state;
  }

};

export default filtersReducer;
