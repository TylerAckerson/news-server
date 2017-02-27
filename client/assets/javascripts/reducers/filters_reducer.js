import { ADD_FILTER_LANGUAGE, ADD_FILTER_CATEGORY } from '../actions';
import merge from 'lodash/merge';

const initialState = {
  categoryOptions: new Set(["sport", "general"]),
  languageOptions: new Set(['en', 'de', 'fr']),
  categories: new Set(),
  languages: new Set()
};

const filtersReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case ADD_FILTER_LANGUAGE:
      nextState = merge({}, state);
      nextState.languages.add(action.language);
      return nextState;
    case ADD_FILTER_CATEGORY:
      nextState = merge({}, state);
      nextState.categories.add(action.category);
      return nextState;

    default:
    return state;
  }

};

export default filtersReducer;
