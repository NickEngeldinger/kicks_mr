import React from 'react';
import { RouteTransition } from 'react-router-transition';
import { BrowserRouter, Route, browserHistory, Switch } from 'react-router-dom';

import App from '../../../imports/ui/App.jsx';
import Home from '../../../imports/ui/Home.jsx';
import Kicks from '../../../imports/ui/Kicks.jsx';
import NotFound from '../../../imports/ui/NotFound.jsx';

export const renderRoutes = () => (
	<BrowserRouter>
		<App>
			<Route render={({location, history, match}) => {
				return (
					<RouteTransition
						pathname={location.pathname}
						atEnter={{ opacity: 0 }}
						atLeave={{ opacity: 0 }}
						atActive={{ opacity: 1 }}
					>
						<Switch>
				  		<Route exact path="/" component={Home} />
				  		<Route exact path="/kicks" component={Kicks} />
				  		<Route path="*" component={NotFound} />
			  		</Switch>
					</RouteTransition>
				);
			}} />
			
  	</App>
	</BrowserRouter>
);