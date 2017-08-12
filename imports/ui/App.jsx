import React, { Component } from 'react';
import { RouteTransition } from 'react-router-transition';

import { Nav } from './Nav.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

export default class App extends Component {
	render() {
		return(
			<div className="app">
				<header className="primary-header">
					<h1>Ducks Kicks</h1>
					<img className="logo" src="img/wings.jpg" width="150px" />
				</header>

				<Nav />
				
				<RouteTransition
					pathname={location.pathname}
					atEnter={{ opacity: 0 }}
					atLeave={{ opacity: 1 }}
					atActive={{ opacity: 1 }}
				>
					{this.props.children}
				</RouteTransition>
			</div>
		)
	}
}