import React from 'react'

import PhotoList from './PhotoList.js'
import UserList from './UserList.js'

export default class MainContent extends React.Component {
	constructor(){
		super()
		this.state = {
			users: [],
			photos: []
		}
	}
	componentWillMount(){
		fetch('http://jsonplaceholder.typicode.com/users')
			.then((response) => {
				return response.json()
			})
			.then((users)=>{
				this.setState({ users: users})
			})
		fetch('http://jsonplaceholder.typicode.com/photos')
			.then((response) => {
				return response.json()
			})
			.then((photos)=>{
				this.setState({ photos: photos})
			})
	}
	render() {
		return (
			<div id="mainContent">
				<PhotoList photos={this.state.photos}/>
				<UserList users={this.state.users}/>
			</div>
		);
	}
}
