import React from 'react';


export default class UserDetail extends React.Component{
	constructor(){
		super()
		this.state = {
			useralbums: []
		}
	}
	onItemClick = () => {
		debugger;
		let url = 'http://jsonplaceholder.typicode.com/photos?albumId='
		fetch(url)
			.then((response) => {
				return response.json()
			})
			.then((users)=>{
				this.setState({ users: users})
			})
	}
	componentWillMount(){
		let url = 'http://jsonplaceholder.typicode.com/albums?userId=' + this.props.user.id
		fetch(url)
			.then((response) => {
				return response.json()
			})
			.then((albums)=>{
				this.setState({ useralbums: albums})
			})
	}
	render(){
		let albums = []
		if(this.state.useralbums != null) {
			this.state.useralbums.slice(0, 5).forEach((album) => {
				albums.push(<div id="albumDetail" key={album.id} ><a onClick={this.onItemClick.bind(this, album)}><img class="albumIcon" src="../images/photo.png"/>{album.title}</a></div>)
			})
		} else {
			albums.push (<h1>Cargando albums...</h1>)
		}
		return(
			<div id="userDetail">
				<div class="userInfo">
					<h2>{this.props.user.name}</h2>
					<p> {this.props.user.username}</p>
					<p>{this.props.user.email}</p>
				</div>
				<div class="userInfo">
					<h4>Lema:</h4>
					<p>{this.props.user.company.catchPhrase}</p>
				</div>
				<div id="useralbums">
					<p class="title">Lista de álbumes de {this.props.user.username}:</p>
					{albums}
				</div>
			</div>
		
		);
	}
}




/*import React from 'react';

import userInfo from './userInfo.js'
import userAlbums from './userAlbums.js'

export default class UserDetail extends React.Component{
	constructor(){
		super()
		this.state = {
			albums: []
		}
	}
	componentWillMount(){
		let url = 'http://jsonplaceholder.typicode.com/albums?userId=' + this.props.user.id
		fetch(url)
			.then((response) => {
				return response.json()
			})
			.then((albums)=>{
				this.setState({ albums: albums})
			})
	}
	render(){
		console.log(this.state.albums)
		return(
			<div>
				<userInfo/>
				<userAlbums useralbums={this.state.albums}/>
			</div>
		);
	}
}
*/