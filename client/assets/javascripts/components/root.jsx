import React from 'react';
import { Provider } from 'react-redux';
import NewsSourceListContainer from './sources/news_source_list_container';
import FiltersContainer from './filters/filters_container';

const Root = ({store}) => (
  <Provider store={store}>
    <div>
      <FiltersContainer />
      <NewsSourceListContainer />
    </div>
  </Provider>
);

export default Root;
