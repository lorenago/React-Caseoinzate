import React from 'react';

import UserDetail from './UserDetail.js'

export default class UserList extends React.Component {
	constructor(){
		super()
		this.state = {
			albums: []
		}
	}
	render() {
		let users = []
		if(this.props.users != null) {
			this.props.users.forEach((user) => {
				users.push(<UserDetail  user={user} key={user.id} />)
			})
		} else {
			users.push (<h1>Cargando usuarios...</h1>)
		}
		return(
			<div id="userList">
				{users}
			</div>
		);
	}
}