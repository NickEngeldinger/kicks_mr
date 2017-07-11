import React, { Component, PropTypes } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

export default class AddKick extends Component {
	handleSubmit(event) {
		
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