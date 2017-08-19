import React, { Component, PropTypes } from 'react';
import { BrowserRouter, Route, NavLink} from 'react-router-dom';

export default class Kick extends Component {
	
	deleteThisKick() {
		Meteor.call('kicks.remove', this.props.kick._id)
	}

	render() {
		return (
			<li>
				<button className="delete" onClick={this.deleteThisKick.bind(this)}>&times;</button>
				{ this.props.kick.model } - { this.props.kick.colorway }
				<NavLink to={`/kick/${this.props.kick.stub}`}>View</NavLink>
			</li> 
		);
	}
}

Kick.propTypes = {
	kick: PropTypes.object.isRequired
} 
