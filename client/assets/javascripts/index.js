import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers/root_reducer';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", function() {
	const store = createStore(rootReducer);
	const root = document.getElementById("root");
	render(<Root store={store} />, root);
});
