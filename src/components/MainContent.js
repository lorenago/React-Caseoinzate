import React from 'react'
//import $ from 'jquery'

import PhotoList from './PhotoList.js'
import UserList from './UserList.js'


export default class MainContent extends React.Component {
	constructor(){
		super();
		this.state ={
			users:{}
		}
	}

/*	componentDidMount() {
		debugger;
		$.ajax({
	      	method:'GET',
	       	url:'http://jsonplaceholder.typicode.com/users',
	       //	data:{ 'sessionId': id  },
	       	success:function(res){
	       		console.log(res);
	         	this.setState({ users:res.data })
	       	}.bind(this)
	    });
	}
*/
	render() {
		return (
			<div id="mainContent">
				<PhotoList />
				<UserList users={this.state.users}/>
			</div>
		);
	}
}

//<UserList users={this.state.users}/>