import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import AddKick from './AddKick.jsx';
import SelectKick from './SelectKick.jsx';
import DeleteKick from './DeleteKick.jsx';
import EditKick from './EditKick.jsx';
import FileUpload from './FileUpload.jsx';
import RemoveImage from './RemoveImage.jsx';

class Admin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedKick : '', 
			kick : {
				model : '', 
				colorway : ''
			},
			imageId : '',
			imageExt : ''
		};

		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.handleImageUpload = this.handleImageUpload.bind(this);
	}

	handleSelectChange(value) {
		this.setState({selectedKick: value});
	}

	handleImageUpload(id, ext) {
		this.setState({
			imageId: id,
			imageExt: ext
		});
	}

	render() {
		const selectedKick = this.state.selectedKick;
		const kick = this.state.kick;
		const imageId = this.state.imageId;
		const imageExt = this.state.imageExt;

		return (
			<div>
				<AccountsUIWrapper />

				{ this.props.currentUser ?
					<div>
						<h2>Admin</h2>

						<SelectKick
							selectedKick={selectedKick} 
							onSelectChange={this.handleSelectChange} 
						/>

						<EditKick selectedKick={selectedKick} />

						{ selectedKick !== '' ? 
							<DeleteKick selectedKick={selectedKick} kick={kick} />
							: null
						}
						<h3>Add a new kick</h3>

						<AddKick 
							imageId={imageId}
							imageExt={imageExt}
						/>

						<FileUpload
							imageId={imageId}
							onImageUpload={this.handleImageUpload}
						/>

						<RemoveImage />

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