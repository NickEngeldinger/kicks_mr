import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Images } from '../api/uploads.js';

export default class FileUpload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			uploading : [],
			progress : 0,
			inProgress : false,
			error : '',
			status : '',
			imageId : '',
			imageExt : ''
		}
	
		this.handleChange = this.handleChange.bind(this);
	}

	//TODO: GET PROGRESS BAR WORKING
	//IMPLEMENT UPLOAD COMPONENT AS CHILD OF ADMIN
	//PASS IMAGE ID TO DB COLLECTION FOR ASSOCIATED KICK
	//SHOW THUMBNAIL ON UPLOAD
	//GIVE OPTION TO REMOVE AND DELETE
	//GIVE OPTION TO ADD MULTIPLE IMAGES
	//PASS ID AND EXTENSION TO ADMIN SO ITS ACCESSIBLE 
	//TO NEWKICK COMPONENT AND CAN BE ADDED TO KICK DB ENTRY

	handleChange(event) {
		event.preventDefault();

		if (event.currentTarget.files && event.currentTarget.files[0]) {
			var file = event.currentTarget.files[0];

			if (file) {
				let uploadInstance = Images.insert({
					file: file,
					meta: {
						//locator: self.props.fileLocator,
						userId: Meteor.userId()
					},
					streams: 'dynamic',
					chunkSize: 'dynamic',
					allowWebWorkers: true
				}, false);

				this.setState({
					uploading: uploadInstance,
					inProgress: true
				});

				uploadInstance.on('start', () => {
					console.log('starting')
				});

				uploadInstance.on('uploaded', (error, fileObj) => {
					console.log('uploaded: ', fileObj)

					//THIS SHOULD BE RESET AFTER ADDKICK IS COMPLETE
					//this.refs['fileInput'].value = '';

					this.setState({
						uploading: [],
						progress: 0,
						inProgress: false,
						status: 'Image upload successful',
						imageId: fileObj._id,
						imageExt: fileObj.ext
					});

					this.props.onImageUpload(this.state.imageId, this.state.imageExt);
				});

				uploadInstance.on('error', (error, fileObj) => {
					this.setState({error: error});
				});

				uploadInstance.on('progress', (progress, fileObj) => {
					console.log('Upload percentage: ', progress);
					console.log('Uploading: ', this.state.uploading)

					this.setState({
						progress: progress
					})
				});

				uploadInstance.start();
			}
		}
	}

	render() {
			return (
				<div>
					<p>Upload Kick Image:</p>
					<input
						type="file"
						id="fileInput"
						disabled={this.state.inProgress}
						ref="fileInput"
						onChange={this.handleChange}
					/>
					<hr />
					<p>Progress: {this.state.progress}%</p>
					<hr />
					<div>
						{ this.state.status }
						{ this.state.error.reason }
					</div>
				</div>
			);
	}
}

//export default createContainer(() => {
//	return {
		//currentDoc: Meteor.subscribe('Images'),
//		currentFile: Images.find().fetch()
//	}
//}, FileUpload);
//});

//export default FileUploadComponent;