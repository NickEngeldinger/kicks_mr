import React, { Component, PropTypes } from 'react';

export default class SelectKickOption extends Component {

	render() {
		return (
			<option value={this.props.option._id} data-img={this.props.option.imageId}>
				{this.props.option.model} - {this.props.option.colorway}
			</option>
		);
	}
}

SelectKickOption.propTypes = {
	option: PropTypes.object.isRequired
}