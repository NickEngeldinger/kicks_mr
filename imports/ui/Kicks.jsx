import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { Kicks } from '../api/kicks.js';

import Kick from './Kick.jsx';

class KicksApp extends Component {
	/*getKicks() {
		return [
			{ _id: 1, model: 'Jordan 4', colorway: 'white', category: 'retro' },
			{ _id: 2, model: 'Jordan 3 Pit Crew', colorway: 'black', category: 'retro' },
			{ _id: 3, model: 'Nike Zoom Speed Turf', colorway: 'camo', category: 'football' }
		];
	}*/

	renderKicks() {
		return this.props.kicks.map((kick) => (
			<Kick key={kick._id} kick={kick} />
		));
		//return this.getKicks().map((kick) => (
		//	<Kick key={kick._id} kick={kick} />
		//));
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

KicksApp.propTypes = {
	kicks: PropTypes.array.idRequired
};

export default createContainer(() => {
	return {
		kicks: Kicks.find({}).fetch()
	}
}, KicksApp);