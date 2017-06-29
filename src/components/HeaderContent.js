import React from 'react';

//export default class componente extends React.Component
export default class HeaderComponent extends React.Component {
	constructor(){
		super()
	}
	render() {
		return(
			<div id="content">
				<div id="image">
					<img id="logo" src="../images/logoF.png"/>
				</div>
				<p>Caseonizate</p>
			</div>
		)
	}
}