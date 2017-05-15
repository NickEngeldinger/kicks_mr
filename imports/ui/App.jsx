import React, { Component } from 'react';

import { Nav } from './Nav.jsx';

export default class App extends Component {
	render() {
		return(
			<div className="app">
				<header className="primary-header">
					<h1>Ducks Kicks</h1>
					<img className="logo" src="logo.png" />
				</header>
				<Nav />
				{this.props.children}
			</div>
		)
	}
}