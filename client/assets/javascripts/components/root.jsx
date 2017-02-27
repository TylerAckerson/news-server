import React from 'react';
import { Provider } from 'react-redux';
import NewsSourceList from './news_source_list';
import SourceFiltersContainer from './source_filters_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <SourceFiltersContainer />
  </Provider>
);

{/* <NewsSourceList /> */}

export default Root;
