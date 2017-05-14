import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

export default class App extends Component {
	render() {
		return(
			<div className="app">
				<header className="primary-header">
					<h1>Ducks Kicks</h1>
					<img className="logo" src="logo.png" />
				</header>
				<aside className="primary-aside">
					<Link to="/">Home</Link>
					<Link to="/kicks">All Kicks</Link>
					<Link to="/about">About</Link>
				</aside>
				{this.props.children}
			</div>
		)
	}
}