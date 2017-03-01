import {connect} from 'react-redux';
import SourceList from './source_list';
import {allSources} from '../../reducers/selectors';
import {fetchSources} from '../../actions/source_actions';

const mapStateToProps = (state) => ({
  sources: allSources(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestSources: () => dispatch(fetchSources())
});

const SourceListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SourceList);

export default SourceListContainer;
