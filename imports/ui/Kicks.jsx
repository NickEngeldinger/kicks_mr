import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Kick from './Kick.jsx';

export default class Kicks extends Component {
	getKicks() {
		return [
			{ _id: 1, model: 'Jordan 4', colorway: 'white', category: 'retro' },
			{ _id: 2, model: 'Jordan 3 Pit Crew', colorway: 'black', category: 'retro' },
			{ _id: 3, model: 'Nike Zoom Speed Turf', colorway: 'camo', category: 'football' }
		];
	}

	renderKicks() {
		return this.getKicks().map((kick) => (
			<Kick key={kick._id} kick={kick} />
		));
	}

	render() {
		return (
			<div className="container">
				<ul>
						{this.renderKicks()}
				</ul>
			</div>
		)
	}
}