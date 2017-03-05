import * as SourceApiUtil from '../util/source_api_util';

export const RECEIVE_SOURCES = "RECEIVE_SOURCES";

export const receiveSources = sources => ({
  type: RECEIVE_SOURCES,
  sources
  }
);

export const fetchSources = (filters) => dispatch => (
  SourceApiUtil.fetchSources(filters).then(resp => {
    dispatch(receiveSources(resp.sources));
  })
);
