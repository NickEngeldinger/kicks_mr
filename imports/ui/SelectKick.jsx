import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Kicks } from '../api/kicks.js';

import SelectKickOption from './SelectKickOption';

class SelectKicks extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		let kickId = event.target.value;
		let imgId =event.target[event.target.selectedIndex].getAttribute('data-img');
		this.props.onSelectChange(kickId, imgId);
	}

	renderSelect() {
		return this.props.options.map((option) => (
			<SelectKickOption key={option._id} option={option} />
		));
	}

	render() {
		return (
			<div className="container">
				<select value={this.props.selectedKick} onChange={this.handleChange}>
					<option value="">Select a kick</option>
					{this.renderSelect()}
				</select>
			</div>
		)
	}
}

SelectKicks.propTypes = {
	options: PropTypes.array.isRequired
};

export default createContainer(() => {
	Meteor.subscribe('kicks');
	return {
		options: Kicks.find({}).fetch()
	}
}, SelectKicks);
