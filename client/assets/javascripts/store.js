import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/root_reducer';
import thunk from './middleware/thunk';
import {fetchSources} from './util/source_api_util'

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  );
  store.subscribe(() => {
    const currentStore = store.getState();
    localStorage.state = JSON.stringify(currentStore);
  });
  return store;
}

export default configureStore;
