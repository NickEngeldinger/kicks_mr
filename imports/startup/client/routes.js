import React from 'react';
import { BrowserRouter, Route, browserHistory, Switch } from 'react-router-dom';

import App from '../../../imports/ui/App.jsx';
import Home from '../../../imports/ui/Home.jsx';
import Kicks from '../../../imports/ui/Kicks.jsx';
import ViewKick from '../../../imports/ui/ViewKick.jsx';
import Admin from '../../../imports/ui/Admin.jsx';
import FileUpload from '../../../imports/ui/FileUpload.jsx';
import Imgs from '../../../imports/ui/Imgs.jsx';
import NotFound from '../../../imports/ui/NotFound.jsx';

export const renderRoutes = () => (
	<BrowserRouter>
		<App>
			<Switch>
	  		<Route exact path="/" component={Home} />
	  		<Route exact path="/kicks" component={Kicks} />
	  		<Route exact path="/kick/:_id" component={ViewKick} />
	  		<Route exact path="/admin" component={Admin} />
	  		<Route exact path="/upload" component={FileUpload} />
	  		<Route exact path="/images" component={Imgs} />
  		</Switch>
  	</App>
	</BrowserRouter>
);

//Deal with 404s while allowing public static assets to work

//<Route path="*" component={NotFound} />
