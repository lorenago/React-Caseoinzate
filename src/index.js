import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';

// Render the main component into the dom
ReactDOM.render(<App/>, document.getElementById('app'));


/*

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRouter, hasHistory } from 'react-router'


import Home from './Routes/Home.js'
import Store from './routes/Store.js'

// Render the main component into the dom
ReactDOM.render(
	<Router history={hasHistory}>
		<Route path='/' component={Home}/>
		<Route path='store' component={Store}/>
	</Router>
, document.getElementById('app'));


*/