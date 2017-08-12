import React, { Component, PropTypes } from 'react';

export default class Img extends Component {
	
	render() {
		return (
			<li>
				<img src={`/img/kicks/${this.props.image._id}.${this.props.image.ext}`} width="200" />
			</li>
		);
	}	
}

Img.propTypes = {
	image: PropTypes.object.isRequired
}