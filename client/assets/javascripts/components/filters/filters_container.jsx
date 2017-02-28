import {connect} from 'react-redux';
import Filters from './filters';
import {allFilters} from '../../reducers/selectors';
import {
  fetchFilters,
  toggleLanguage,
  toggleCategory,
  resetFilters
} from '../../actions/filter_actions';

const mapStateToProps = (state) => ({
  filters: allFilters(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestFilters: () => dispatch(fetchFilters()),
  handleToggleLanguage: (language) => dispatch(toggleLanguage(language)),
  handleToggleCategory: (category) => dispatch(toggleCategory(category)),
  handleReset: () => dispatch(resetFilters())
});

const FiltersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);

export default FiltersContainer;
