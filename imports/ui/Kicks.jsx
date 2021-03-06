import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Kicks } from '../api/kicks.js';

import Kick from './Kick.jsx';

class KicksList extends Component {

	renderKicks() {
		return this.props.kicks.map((kick) => (
			<Kick key={kick._id} kick={kick} />
		));
	}

	render() {
		return (
			<div className="container">
				<ul>
					{this.renderKicks()}
				</ul>
			</div>
		)
	}
}

KicksList.propTypes = {
	kicks: PropTypes.array.isRequired
};

export default createContainer(() => {
	Meteor.subscribe('kicks');
	return {
		kicks: Kicks.find({}).fetch()
	}
}, KicksList);