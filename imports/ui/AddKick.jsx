import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

import { Kicks } from '../api/kicks.js';

export default class AddKick extends Component {
	constructor(props) {
		super(props);
		this.state = {value : ''};

		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();

		const model = ReactDOM.findDOMNode(this.refs.modelInput).value.trim();
		const colorway = ReactDOM.findDOMNode(this.refs.colorwayInput).value.trim();
		const category = this.state.value;

		Meteor.call('kicks.insert', model, colorway, category);

		ReactDOM.findDOMNode(this.refs.modelInput).value = '';
		ReactDOM.findDOMNode(this.refs.colorwayInput).value = '';
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	render() {
		return (
			<form className="new-kick" onSubmit={this.handleSubmit.bind(this)} >
				<select value={this.state.value} onChange={this.handleChange}>
					<option value="">Select a category</option>
					<option value="retro">Jordan Retro</option>
					<option value="jordan">Jordan</option>
					<option value="basketball">Basketball</option>
					<option value="baseball">Baseball</option>
					<option value="football">Football</option>
					<option value="nsw">Nike Sportswear</option>
				</select>
				<input
					type="text"
					ref="modelInput"
					placeholder="Model of sneaker"
				/>
				<input
					type="text"
					ref="colorwayInput"
					placeholder="Colorway of sneaker"
				/>
				<button type="submit">Add Sneaker</button>
			</form>	
		)
	}
}