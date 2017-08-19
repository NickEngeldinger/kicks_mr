import React, { Component, PropTypes } from 'react';
import { BrowserRouter, Route, NavLink} from 'react-router-dom';

export default class Kick extends Component {
	
	render() {
		return (
			<li>
				{ this.props.kick.model } - { this.props.kick.colorway }
				<NavLink to={`/kick/${this.props.kick.slug}`}>View</NavLink>
			</li> 
		);
	}
}

Kick.propTypes = {
	kick: PropTypes.object.isRequired
} 
