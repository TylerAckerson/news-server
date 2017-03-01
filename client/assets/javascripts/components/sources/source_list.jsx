import React from 'react';
import Source from './source';

class SourceList extends React.Component {
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
            sources.map(source => <Source source={source} key={source.id}/>)
          }
        </ul>
      </div>
    );
  }
};

export default SourceList;
