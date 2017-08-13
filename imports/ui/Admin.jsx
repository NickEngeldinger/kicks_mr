import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import AddKick from './AddKick.jsx';
import SelectKick from './SelectKick.jsx';
import DeleteKick from './DeleteKick.jsx';

class Admin extends Component {
	constructor(props) {
		super(props);

		this.state = {selectedKick: ''};

		this.handleSelectChange = this.handleSelectChange.bind(this);
	}

	handleSelectChange(value) {
		this.setState({selectedKick: value});
	}

	render() {
		const selectedKick = this.state.selectedKick;

		return (
			<div>
				<AccountsUIWrapper />

				{ this.props.currentUser ?
					<div>
						<h2>Admin</h2>

						<h3>Edit or delete a kick</h3>

						<SelectKick
							selectedKick={selectedKick} 
							onSelectChange={this.handleSelectChange} 
						/>

						<DeleteKick selectedKick={selectedKick} />

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