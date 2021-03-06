import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Kicks } from '../api/kicks.js';

class EditKick extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		event.preventDefault();

		const model = ReactDOM.findDOMNode(this.refs.kickModel).value.trim();
		const colorway = ReactDOM.findDOMNode(this.refs.kickColorway).value.trim();
		const stub = `${model.split(' ').join('-')}-${colorway.split(' ').join('-')}`;

		Meteor.call('kicks.update', this.props.selectedKick.id, model, colorway, stub);
	}

	render () {
		if (this.props.kick) {
			return (
				<div className="container">
					<form>
						<input
							key={this.props.selectedKick.id}
							defaultValue={this.props.kick.model}
							ref="kickModel"
							type="text"
						/>
						<input
							key={this.props.selectedKick.id + '1'}
							defaultValue={this.props.kick.colorway}
							ref="kickColorway"
							type="text"
						/>
						<button onClick={this.handleClick}>Update Kick</button>
					</form>
				</div>
			);
		} else {
			return (
				<div className="container">
					<p>Select a kick to edit or delete</p>
				</div>
			)
		}
	}
}

EditKick.propTypes = {
	kick: PropTypes.object
};

export default createContainer(props => {
	const kickSubscription = Meteor.subscribe('kicks');
	return {
		kick: Kicks.findOne({_id: props.selectedKick.id})
	}
}, EditKick);