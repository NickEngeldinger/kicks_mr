import React, {Component, PropTypes} from 'react';

export default class RemoveImage extends Component {
	constructor(props) {
		super(props);
		this.state = {imgId : ''};

		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleClick(event) {
		const conf = confirm('Are you sure you want to delete this image?') || false;
		if (conf == true) {
			//Add passing through ID
			//Tie into DeleteKick component
			Meteor.call('image.remove', this.state.imgId, (err,res) => {
				if (err) {
					console.error(err);
				}
			});
		}
	}

	handleChange(event) {
		this.setState({imgId : event.target.value});
	}

	render() {
		return(
			<div>
				<input
					type="text"
					placeholder="Image Id"
					value={this.state.imgId}
					onChange={this.handleChange}
				/>		
				<button onClick={this.handleClick}>
					Remove Image
				</button>
			</div>
		);
	}
}

RemoveImage.propTypes = {
	fileId: PropTypes.string
}