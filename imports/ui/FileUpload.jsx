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
			img: {
				id: '',
				ext: ''
			}
		}
	
		this.handleChange = this.handleChange.bind(this);
	}

	//TODO: GET PROGRESS BAR WORKING
	//SHOW THUMBNAIL ON UPLOAD
	//GIVE OPTION TO REMOVE AND DELETE
	//GIVE OPTION TO ADD MULTIPLE IMAGES
	//CONVERT STATE THAT'S BEING PASSED TO ADMIN
	//TO OBJECT WITH ASSOCIATED PROPERTIES
	//IF USER NAVIGATES TO DIFFERENT SECTION
	//REMOVE UPLOAD FROM DB

	handleChange(event) {
		event.preventDefault();

		if (event.currentTarget.files && event.currentTarget.files[0]) {
			var file = event.currentTarget.files[0];
			
			//const files = event.currentTarget.files;
			//console.log(files);

			if (file) {
				//for multiple files
				//loop overuploaded files and run insert for each
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
						uploading : [],
						progress : 0,
						inProgress : false,
						status : 'Image upload successful',
						img : {
							id : fileObj._id,
							ext: fileObj.ext
						}
					});

					this.props.onImageUpload(fileObj._id, fileObj.ext);
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
						multiple 
					/>
					<hr />
					<p>Progress: {this.state.progress}%</p>
					<hr />
					<div>
						{ this.state.status }
						{ this.state.error.reason }
					</div>
					<img src={`http://192.168.101.170:4000/public/img/kicks/
						${this.state.img.id}.${this.state.img.ext}`} 
						width="100"
					/>
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