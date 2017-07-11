import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { Kicks } from '../api/kicks.js';

import Kick from './Kick.jsx';

class KicksApp extends Component {

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

	renderKicks() {
		return this.props.kicks.map((kick) => (
			<Kick key={kick._id} kick={kick} />
		));
	}

	render() {
		return (
			<div className="container">

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

				<ul>
						{this.renderKicks()}
				</ul>
			</div>
		)
	}
}

KicksApp.propTypes = {
	kicks: PropTypes.array.idRequired
};

export default createContainer(() => {
	return {
		kicks: Kicks.find({}).fetch()
	}
}, KicksApp);