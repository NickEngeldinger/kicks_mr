import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Kicks } from '../api/kicks.js';

class ViewKick extends Component {

	render() {
		return (
			<div className="container">
				{ this.props.kick ?
					<div>
						<h1>
							{this.props.kick.model}
						</h1>
						<h2>
							{this.props.kick.colorway}
						</h2>
						<h3>
							{this.props.kick.category}
						</h3>
					</div>
				:
				<p>No Data Yet (Spinny Spinner)</p>
				}
			</div>
		);
	}
}

ViewKick.propTypes = {
	kick: PropTypes.object
};

export default createContainer(({match}) => {
	Meteor.subscribe('kicks');
	return {
		kick: Kicks.findOne({slug: match.params.slug})
	}
}, ViewKick);