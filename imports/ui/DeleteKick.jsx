import React, { Component , PropTypes } from 'react';

export default class DeleteKick extends Component {

	deleteKick() {
		if (window.confirm('Are you sure you want to delete this kick?')) {
			Meteor.call('kicks.remove', this.props.selectedKick.id);
			Meteor.call('image.remove', this.props.selectedKick.imgId);
		}
	}

	render() {
		return (
			<button onClick={this.deleteKick.bind(this)}>Delete kick</button>
		);
	}
}