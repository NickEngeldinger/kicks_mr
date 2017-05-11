import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

export default class Home extends Component {
	render() {
		return(
			<div>
				<h1>Ducks Kicks</h1>
				<Link to="/kicks">All Kicks</Link>
			</div>
		)
	}
}