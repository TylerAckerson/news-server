import {
  TOGGLE_LANGUAGE,
  TOGGLE_CATEGORY,
  RESET_FILTERS
} from '../actions/filter_actions';
import * as SourceApiUtil from '../util/source_api_util';
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
}

const filtersReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case TOGGLE_LANGUAGE:
      nextState = merge({}, state);
      nextState.languages[action.language] = !nextState.languages[action.language];
      SourceApiUtil.fetchSources(nextState.filters);
      return nextState;
    case TOGGLE_CATEGORY:
      nextState = merge({}, state);
      nextState.categories[action.category] = !nextState.categories[action.category];
      SourceApiUtil.fetchSources(nextState.filters);
      return nextState;
    case RESET_FILTERS:
      SourceApiUtil.fetchSources(initialState);
      return initialState;
    default:
      return state;
  }

};

export default filtersReducer;
