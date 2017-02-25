import React from 'react';
import ReactDOM from 'react-dom';
import NewsSourceList from './components/news_source_list';
import store from './store.js';

document.addEventListener("DOMContentLoaded", function() {
	const root = document.getElementById("root");
	ReactDOM.render(<NewsSourceList store={store} />, root);
});
