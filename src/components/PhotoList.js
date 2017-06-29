import React from 'react';

import PhotoDetail from './PhotoDetail.js'

export default class PhotoList extends React.Component{
	constructor(){
		super()
		this.state = {
			
		}
	}
	render(){
		return(
			<div id="photoList">
				<PhotoDetail/>
				<PhotoDetail/>
				<PhotoDetail/>
				<PhotoDetail/>
			</div>
		);
	}
}


/*

import React from 'react';

import PhotoDetail from './PhotoDetail.js'

export default class PhotoList extends React.Component{
	constructor(){
		super()
		this.state = {
			
		}
	}
	render(){
		let photos = []

		if(this.props.photos != null) {
			this.props.photos.forEach((photo) => {
				photos.push(<PhotoDetail photo={photo} key={photo.url} />)
			})
		} else {
			photos.push (<h1>Loading</h1>)
		}

		return(
			<div id="photoList">
				{photos}
			</div>
		);
	}
}


*/