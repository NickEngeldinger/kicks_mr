import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

export const Nav = () => (
	<aside className="primary-aside">
		<NavLink to="/" exact activeClassName="active">Home</NavLink>
		<NavLink to="/kicks" activeClassName="active">All Kicks</NavLink>
		<NavLink to="/about" activeClassName="active">About</NavLink>
		<NavLink to="/add-kick" activeClassName="active">Add Kick</NavLink>
	</aside>
);