import {connect} from 'react-redux';
import NewsSourceList from './news_source_list';
import {allSources} from '../../reducers/selectors';
import {fetchSources} from '../../actions/source_actions';

const mapStateToProps = (state) => ({
  sources: allSources(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestSources: () => dispatch(fetchSources())
});

const NewsSourceListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsSourceList);

export default NewsSourceListContainer;
