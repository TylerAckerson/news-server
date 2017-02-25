import { combineReducers } from 'redux';

import filtersReducer from './filters_reducer';
// import sourcesReducer from './sources_reducer';

const RootReducer = combineReducers({
  filters: filtersReducer,
  // sources: sourcesReducer
});

export default RootReducer;
