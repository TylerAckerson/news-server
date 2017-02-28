export const fetchFilters = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/filters', true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      return JSON.parse(request.responseText);
    } else {
      console.warn('oh shit oh god oh no');
    }
  }.bind(this);

  request.onerror = function() {
    console.warn('oh shit oh god oh no. Connection error.');
  };

  request.send();
};
