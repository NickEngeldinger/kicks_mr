import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import AddKick from './AddKick.jsx';
import SelectKick from './SelectKick.jsx';

class Admin extends Component {
	render() {
		return (
			<div>
				<AccountsUIWrapper />

				{ this.props.currentUser ?
					<div>
						<h2>Admin</h2>

						<h3>Edit a kick</h3>

						<SelectKick />

						<h3>Add a new kick</h3>

						<AddKick />

					</div>
					: 
					<div>
						<h3>Please Login</h3>
					</div>
				}
			</div>
		);
	}
}

Admin.propTypes = {
	currentUser: PropTypes.object
}

export default createContainer(() => {
	return {currentUser : Meteor.user()};	
}, Admin);