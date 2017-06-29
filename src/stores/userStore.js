import Reflux from 'reflux'
import $ from 'jquery'

import userActions from '../actions/userActions.js'

let UserStore = Reflux.createStore({
	listenables: [userActions],
	fetchUsers: function(){ //accion del archivo de actions
		$.ajax({
			url: 'http://jsonplaceholder.typicode.com/users',
			dataType: 'json'
		})
		.done(function(users){
			this.trigger(users) //Que pinte la vista en cuanto pueda. result o lo que sea (data,...)
		})
	}/*,
	getAlbums: function(userId){
		$.ajax({
			url: 'http://jsonplaceholder.typicode.com/albums?userId=' + userId
			dataType: 'json'
		})
		.done(function(albums){
			this.trigger(albums)
		})
	},
	getPhotos: function(albumId){
		$.ajax({
			url: 'http://jsonplaceholder.typicode.com/photos?albumId=' + albumId
			dataType: 'json'
		})
		.done(function(photos){
			this.trigger(photos)
		})
	}*/
})