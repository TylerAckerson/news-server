export const allFilters = ({ filters }) => ({
  languages: filters.languages,
  categories: filters.categories
});

export const allSources = ({sources}) => Object.keys(sources).map(id =>sources[id]);
