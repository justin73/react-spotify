//Stateless component 

import React from 'react'
import AlbumItem from './albumItem';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Component } from 'react';
export default class AlbumList extends Component {
	constructor(props){
		super(props)
	}	
	render() {
		console.log('====================================');
		console.log('token in albumlist ---> ', this.props.token);
		console.log('====================================');
		return (
			<div className="albumListContainer">
				<ul>
					{this.props.albums.map(album => 
					
						<AlbumItem key={album.id} {...album} token={this.props.token} getAlbumTracks={this.props.getAlbumTracks}/>
					)}
				</ul>
			</div>
		)
	}
}