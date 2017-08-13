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
		this.props.onSelectChange(event.target.value);
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
					<option>Select a kick</option>
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
