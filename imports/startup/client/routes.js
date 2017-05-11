import React from 'react';
import { BrowserRouter, Route, browserHistory, Switch } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../../../imports/ui/App.jsx';
import Kicks from '../../../imports/ui/Kicks.jsx';
import NotFound from '../../../imports/ui/NotFound.jsx';

Meteor.startup(() => {
  render((
  	<BrowserRouter>
  		<Switch> 
	  		<Route exact path="/" component={App} />
	  		<Route exact path="/kicks" component={Kicks} />
	  		<Route path="*" component={NotFound} />
  		</Switch>
  	</BrowserRouter>
  	), document.getElementById('root'));
});