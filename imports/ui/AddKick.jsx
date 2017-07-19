import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

import { Kicks } from '../api/kicks.js';

export default class AddKick extends Component {
	handleSubmit(event) {
		event.preventDefault();

		const model = ReactDOM.findDOMNode(this.refs.modelInput).value.trim();
		const colorway = ReactDOM.findDOMNode(this.refs.colorwayInput).value.trim();

		Kicks.insert({
			model,
			colorway,
			createdAt: new Date()
		});

		ReactDOM.findDOMNode(this.refs.modelInput).value = '';
		ReactDOM.findDOMNode(this.refs.colorwayInput).value = '';
	}

	render() {
		return (
			<form className="new-kick" onSubmit={this.handleSubmit.bind(this)} >
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