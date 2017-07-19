import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default class AccountsUIWrapper extends Component {
	componentDidMount() {
		//Accounts UI doesn't have a package for React yet so we wrap Blaze to render Login buttons
		this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
	}
	comnponentWillUnmount() {
		//Cleanup the Blaze view
		Blaze.remove(this.view);
	}
	render() {
		//render a placeholder that will be filled in by Blaze
		return <span ref="container" />;
	}
}