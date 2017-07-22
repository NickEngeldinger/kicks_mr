import React, { Component } from 'react';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import AddKick from './AddKick.jsx';

export default class Admin extends Component {

	render() {
		return (
			<div>
				<AccountsUIWrapper />

				{ Meteor.userId() ?
				<div>
					<h2>Admin</h2>

					<AddKick />
				</div>
				: ''}
			</div>
		);
	}
}