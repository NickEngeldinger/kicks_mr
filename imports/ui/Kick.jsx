import React, { Component, PropTypes } from 'react';

export default class Kick extends Component {
	
	deleteThisKick() {
		Meteor.call('kicks.remove', this.props.kick._id)
	}

	render() {
		return (
			<li>
				<button className="delete" onClick={this.deleteThisKick.bind(this)}>&times;</button>
				{ this.props.kick.model } - { this.props.kick.colorway }
			</li> 
		);
	}
}

Kick.propTypes = {
	kick: PropTypes.object.isRequired,
} 
