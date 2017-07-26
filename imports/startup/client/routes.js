import React from 'react';
import { BrowserRouter, Route, browserHistory, Switch } from 'react-router-dom';

import App from '../../../imports/ui/App.jsx';
import Home from '../../../imports/ui/Home.jsx';
import Kicks from '../../../imports/ui/Kicks.jsx';
import Admin from '../../../imports/ui/Admin.jsx';
import FileUpload from '../../../imports/ui/FileUpload.jsx';
import FileIndividualFile from '../../../imports/ui/FileIndividualFile.jsx';
import NotFound from '../../../imports/ui/NotFound.jsx';

export const renderRoutes = () => (
	<BrowserRouter>
		<App>
			<Switch>
	  		<Route exact path="/" component={Home} />
	  		<Route exact path="/kicks" component={Kicks} />
	  		<Route exact path="/admin" component={Admin} />
	  		<Route exact path="/upload" component={FileUpload} />
	  		<Route exact path="/single-file" component={FileIndividualFile} />
	  		<Route path="*" component={NotFound} />
  		</Switch>
  	</App>
	</BrowserRouter>
);