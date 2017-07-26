import React, { Component, PropTypes } from 'react';

export default class IndividualFile extends Component {
	
	removeFile() {
		'use strict';

		let conf = confirm('Are you sure you want to delete the file?') || false;

		if (conf == true) {
			Meteor.call('RemoveFile', this.props.fileId, (err, res) => {
				if (err) {console.log(err)}
			});
		}
	}

	renameFile() {
		'use strict';

		let validName = /[^a-zA-Z0-9 \.:\+()\-_%!&]/gi;
		let prompt = window.prompt('New file name?', this.props.fileName);

		if (prompt) {
			prompt = prompt.replace(validName, '-');
			prompt.trim();
		}

		if (!_.isEmpty(prompt)) {
			Meteor.call('RenameFile', this.props.fileId, prompt, (err, res) => {
				if (err) {console.log(err)}
			});
		}
	}

	render() {
		return <div>
			<p>{this.props.fileName}</p>
			<button onClick={this.renameFile}>Rename</button>
			<hr />
			<a href={this.props.fileUrl} target="_blank">View</a>
			<hr />
			<button onClick={this.removeFile}>Delete</button>
		</div>
	}
}

/*
IndividualFile.propTypes = {
	fileName: React.PropTypes.string.isRequired,
	fileSize: React.PropTypes.string.isRequired,
	fileUrl: React.PropTypes.string.isRequired,
	fileId: React.PropTypes.string.isRequired
};*/