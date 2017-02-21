import React from 'react';
import ReactDOM from 'react-dom';
import NewsSourceList from './news_source_list';

document.addEventListener("DOMContentLoaded", function() {
	const root = document.querySelector("#root");
	ReactDOM.render(<NewsSourceList />, root);
});
