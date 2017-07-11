import React from 'react';
import { BrowserRouter, Route, browserHistory, Switch } from 'react-router-dom';

import App from '../../../imports/ui/App.jsx';
import Home from '../../../imports/ui/Home.jsx';
import Kicks from '../../../imports/ui/Kicks.jsx';
import AddKick from '../../../imports/ui/AddKick.jsx';
import NotFound from '../../../imports/ui/NotFound.jsx';

export const renderRoutes = () => (
	<BrowserRouter>
		<App>
			<Switch>
	  		<Route exact path="/" component={Home} />
	  		<Route exact path="/kicks" component={Kicks} />
	  		<Route exact path="/add-kick" component={AddKick} />
	  		<Route path="*" component={NotFound} />
  		</Switch>
  	</App>
	</BrowserRouter>
);