import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Images } from '../api/uploads.js';

import Img from './Img.jsx';

class ImgList extends Component {

	renderImages() {
		return this.props.images.map((image) => (
			<Img key={image._id} image={image} />
		));
	}

	render() {
		return (
			<div className="container">
				<ul>
					{this.renderImages()}
				</ul>
			</div>
		)
	}
}

ImgList.propTypes = {
	images: PropTypes.array.isRequired
};

export default createContainer(() => {
	Meteor.subscribe('files.images.all');
	return {
		images: Images.find({}).fetch()
	}
}, ImgList);