
import React from 'react';

import UserDetail from './UserDetail.js'

//export default class componente extends React.Component
export default class UserList extends React.Component {
	constructor(){
		super()
	}
	/*
	componentDidMount() { //Hace que en cuanto se cargue el componente, se haga la llamada al back
		componenteHijo.fetchData() //Debemos definir este método en acciones.
	}*/
	render() {
		return(
			<div id="userList">
				<UserDetail />
				<UserDetail />
				<UserDetail />
				<UserDetail />
			</div>
		);
	}
}


/*


import React from 'react';

import UserDetail from './UserDetail.js'

//export default class componente extends React.Component
export default class UserList extends React.Component {
	constructor(){
		super()
	}

	render() {
		let users = []

		if(this.props.users != null) {
			this.props.users.forEach((user) => {
				users.push(<UserDetail user={user} key={user.id} />)
			})
		} else {
			users.push (<h1>Loading</h1>)
		}

		return(
			<div id="userList">
				{users}
			</div>
		);
	}
}

*/