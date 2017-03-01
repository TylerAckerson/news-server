import React from 'react';
import {Provider} from 'react-redux';
import SourceListContainer from './sources/source_list_container';
import FiltersContainer from './filters/filters_container';

const Root = ({store}) => (
  <Provider store={store}>
    <div>
      <FiltersContainer />
      <SourceListContainer />
    </div>
  </Provider>
);

export default Root;
