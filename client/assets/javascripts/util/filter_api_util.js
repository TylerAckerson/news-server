export const fetchFilters = () => {
  return $.ajax({
    method: 'GET',
    url: `/filters`,
  })
};
