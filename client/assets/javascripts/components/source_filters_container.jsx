import {connect} from 'react-redux';
// import { resetFilters } from '../../actions/items' // action creator
import SourceFilters from './source_filters';
import {addFilterLanguage, addFilterCategory} from '../actions.js';

const mapStateToProps = ({filters}) => ({
  languageOptions: filters.languageOptions,
  categoryOptions: filters.categoryOptions,
  languages: filters.languages,
  categories: filters.categories
});

const mapDispatchToProps = (dispatch) => ({
    // resetItems: () => dispatch(resetItems());
  handleAddFilterLanguage: (language) => dispatch(addFilterLanguage(language)),
  handleAddFilterCategory: (category) => dispatch(addFilterCategory(category))
});

const SourceFiltersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SourceFilters);

export default SourceFiltersContainer;
