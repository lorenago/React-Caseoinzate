import React from 'react';

import PhotoDetail from './PhotoDetail.js'

export default class PhotoList extends React.Component{
	constructor(){
		super()
	}
	render(){
		let photos = []
		if(this.props.photos != null) {
			this.props.photos.slice(0, 5).forEach((photo) => {
				photos.push(<PhotoDetail photo={photo} key={photo.albumId + photo.url} />)
			})
		} else {
			photos.push (<h1>Cargando fotos...</h1>)
		}

		return(
			<div id="photoList">
				<h4>Top 5: </h4>
				{photos}
			</div>
		);
	}
}