import React from 'react';

class NewsSource extends React.Component {
	render() {
		const {name, country, description, language, url, urlsToLogos} = this.props.source;

		const imgStyle = {
		  padding: '20px 0',
			width: '100px',
		};

		return (
			<li>
				<h4><span><strong>Name: </strong></span>{name}</h4>
				<div><span><strong>Country: </strong></span>{country}</div>
				<div><span><strong>Description: </strong></span>{description}</div>
				<div><span><strong>Language: </strong></span>{language}</div>
				<div><a href={url} target="_blank">Source</a></div>
				<img src={urlsToLogos.medium} style={imgStyle}/>
			</li>
		);
	}
};

export default NewsSource;
