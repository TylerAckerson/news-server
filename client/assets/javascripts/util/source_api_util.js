export const fetchSources = (filters) => {
  const query = createQueryString(filters);
  return $.ajax({
    method: 'GET',
    url: `/sources${query}`,
  })
};

const createQueryString = (filters) => {
  let queryParams = [];

  if (filters) {
    const {languages, categories} = filters;
    queryParams = addQueryParams(queryParams, languages, 'langauge');
    queryParams = addQueryParams(queryParams, categories, 'category');
  }

  return queryParams.length ? `?${queryParams.join("&")}` : "";
}

const addQueryParams = (params = [], obj = {},  field = "") => {
  return Object.keys(obj)
    .filter(key => obj[key])
    .map(value => `${field}=${value}`);
}
