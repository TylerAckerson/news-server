import React from 'react';
import NewsSource from './news_source';

class NewsSourceList extends React.Component {

  constructor() {
    super();
    this.state = { items: [] };
  }

  componentDidMount() {
    const request = new XMLHttpRequest();
    request.open('GET', '/sources', true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        const data = JSON.parse(request.responseText);
        this.setState({items: data.sources});
      } else {
        console.warn('oh shit oh god oh no');
      }
    }.bind(this);

    request.onerror = function() {
      console.warn('oh shit oh god oh no. Connection error.');
    };

    request.send();
  }

  render() {

    return (
      <ul>
        {
          this.state.items.map(item => <NewsSource item={item} key={item.id}/>)
        }
      </ul>
    );
  }
};

export default NewsSourceList;
