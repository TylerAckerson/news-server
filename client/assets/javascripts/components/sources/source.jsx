import React from 'react';

class Source extends React.Component {
	render() {
		const {name, country, description, language, url, urlsToLogos} = this.props.source;

		return (
			<li className="pure-g source__list-item">
				<div className="pure-u-1-4 list-item__image-container">
					<img className="list-item__image" src={urlsToLogos.medium} />
				</div>
				<div className="pure-u-3-4 pure-g list-item__detail-container">
					<div className="pure-u-1-2 list-item__name">{name}</div>
					<div className="pure-u-1-4 list-item__detail list-item__detail--country">
						<span className="list-item__detail-label">Country: </span>
						{country}</div>
					<div className="pure-u-1-4 list-item__detail list-item__detail--language">
						<span className="list-item__detail-label">Language: </span>
						{language}
					</div>
					<div className="list-item__detail list-item__detail--description">
						<span className="list-item__detail-label">Description: </span>
						{description}
					</div>
					<div className="list-item__link">
						<a href={url} target="_blank">Source</a>
					</div>
				</div>
			</li>
		);
	}
};

export default Source;
