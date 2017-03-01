export const fetchSources = () => {
  return $.ajax({
    method: 'GET',
    url: `/sources`,
  })
};
