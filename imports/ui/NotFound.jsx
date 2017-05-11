import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

export default class NotFound extends Component {
	render() {
		return (
			<div>
				<h1>Sorry there's nothing here</h1>
				<Link to="/">Return home</Link>
			</div>
		);
	}
}