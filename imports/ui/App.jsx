import React, { Component } from 'react';
import Kick from './Kick.jsx';

export default class Kicks extends Component {
	getKicks() {
		return [
			{ _id: 1, model: 'Jordan 4', colorway: 'white' },
			{ _id: 2, model: 'Jordan 3 Pit Crew', colorway: 'black' }
		];
	}

	renderKicks() {
		return this.getKicks().map((kick) => (
			<Kick key={kick.__id} kick={kick} />
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