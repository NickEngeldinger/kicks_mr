//import { ReactMeteorData } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
//import { Meteor } from 'meteor/meteor';
import IndividualFile from './FileIndividualFile.jsx';
import { _ } from 'meteor/underscore';

import { Images } from '../api/uploads.js';

//const FileUploadComponent = React.createClass({
	//mixins: [ReactMeteorData],
class FileUpload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			uploading: [],
			progress: 0,
			inProgress: false
		}
	}

	//getMeteorData() {
		//var handle = Meteor.subscribe('files.all');
		//return {
			//docsReadyYet: handle.ready(),
			//docs: Images.find().fetch()
			//docReadyYet: currentDoc,
			//docs: currentFile
		//};
	//}

	uploadIt(event) {
		event.preventDefault();

		let self = this;

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

				//self.setState({
				//	uploading: uploadInstance,
				//	inProgress: true
				//});

				uploadInstance.on('start', () => {
					console.log('starting')
				});

				uploadInstance.on('uploaded', (error, fileObj) => {
					console.log('uploaded: ', fileObj)

					self.refs['fileInput'].value = '';

					self.setState({
						uploading: [],
						progress: 0,
						inProgress: false
					});
				});

				uploadInstance.on('error', (error, fileObj) => {
					console.log('Error during upload: ', error)
				});

				uploadInstance.on('progress', (progress, fileObj) => {
					console.log('Upload percentage: ', progress);

					self.setState({
						progress: progress
					})
				});

				uploadInstance.start();
			}
		}
	}

	showUploads() {
		console.log('******************************', this.state.uploading)
	}

	render() {
		if (/*this.data.docsReadyYet*/ true) {
			'use strict';

			{/*let fileCursors = this.data.docs;

			let display = fileCursors.map((aFile, key) => {
				console.log('A file: ', aFile.link(), afile.get('name'));
				//let link = UserFiles.findOne({_id:, aFile._id}).link();

				return <div key={'file', + key}>
					<IndividualFile
						fileName={aFile.filename}
						fileUrl={link}
						fileId={aFile._id}
						fileSize={aFile.size}
					/>
				</div>
			});*/}

			return <div>
				<p>Upload New File:</p>
				<input
					type="file"
					id="fileInput"
					disabled={this.state.inProgress}
					ref="fileInput"
					onChange={this.uploadIt}
				/>
				<hr />
				<div>
					{this.showUploads()}
				</div>

				{/*{display}*/}

			</div>
		}
		else return <div>Docs ready failed :(</div>
	}
}

export default createContainer(() => {
	Meteor.subscribe('Images');
	return {
		//currentDoc: Meteor.subscribe('Images'),
		currentFile: Images.find().fetch()
	}
}, FileUpload);
//});

//export default FileUploadComponent;