import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import Root from './components/root';
import configureStore from './store';

document.addEventListener("DOMContentLoaded", function() {
	const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
	const store = configureStore(preloadedState);
	const root = document.getElementById("root");
	render(<Root store={store} />, root);
});
