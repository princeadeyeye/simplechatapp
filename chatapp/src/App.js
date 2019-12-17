import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import DataStore from './data/DataStore'
import {Router} from './Router'


class App extends Component {
	render() {
		  return (
		  	<Provider store={DataStore}>
			    <BrowserRouter>
			    	<Switch>
			     	 <Route path="/chat" component ={Router} />
			     	 <Redirect to="/chat" />
			     	</Switch>
			    </BrowserRouter>
		    </Provider>
		  );
	}
}


export default hot (module) (App);