import React from 'react';

export default class PhotoDetail extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div id="photoDetail">
				<div class="photo">
					<img src={this.props.photo.thumbnailUrl}/>
				</div>
				<p>{this.props.photo.title}</p>
			</div>
		);
	}
}
