import React from 'react';

export default class PhotoDetail extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div id="photoDetail">
				<div class="photo">
					<img src="http://placehold.it/150/fdf73e"/>
				</div>
				<p>Usuario</p>
			</div>
		);
	}
}
