import React, { Component, PropTypes } from 'react';

export default class Kick extends Component {
	render() {
		return (
			<li>{ this.props.kick.name } - { this.props.kick.colorway }</li>
		);
	}
}

Kick.propTypes = {
	kick: PropTypes.object.isRequired;
}