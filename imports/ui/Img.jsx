import React, { Component, PropTypes } from 'react';

export default class Img extends Component {
	
	render() {
		return (
			<li>
				<img src={`http://192.168.101.170:4000/public/img/kicks/${this.props.image._id}.${this.props.image.ext}`} width="200" />
			</li>
		);
	}	
}

Img.propTypes = {
	image: PropTypes.object.isRequired
}