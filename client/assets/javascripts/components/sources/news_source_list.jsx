import React from 'react';
import NewsSource from './news_source';

class NewsSourceList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSources();
  }

  render() {
    const sources = this.props.sources;

    return (
      <div>
        <ul>
          {
            sources.map(source => <NewsSource source={source} key={source.id}/>)
          }
        </ul>
      </div>
    );
  }
};

export default NewsSourceList;
