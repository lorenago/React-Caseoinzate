require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import HeaderContent from './HeaderContent.js'
import MainContent from './MainContent.js'

export default class AppComponent extends React.Component {
	constructor(){
		super()
	}
  	render() {
	    return (
		    <div>
				<HeaderContent/>
		    	<MainContent/>		    	
		    </div>
	    )
  	}
}