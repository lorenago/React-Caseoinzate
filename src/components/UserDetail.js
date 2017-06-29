import React from 'react';

export default class UserDetail extends React.Component{
	constructor(){
		super()
	}
	render(){
		return(
			<div id="userDetail">
				<div class="photo">
					<img src="http://placehold.it/150/51aa97"/>
				</div>
				<div id="userInfo">
					<h3>Nombre: Nombre</h3>
					<p>Nick: Nick</p>
				</div>
			</div>
		);
	}
}
