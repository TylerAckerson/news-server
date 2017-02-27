import React from 'react';
import { Provider } from 'react-redux';
import NewsSourceList from './sources/news_source_list';
import FiltersContainer from './filters/filters_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <FiltersContainer />
      <NewsSourceList />
    </div>
  </Provider>
);

export default Root;
