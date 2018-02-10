//Stateless component 

import React from 'react'
import { AlbumItem } from './albumItem';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Component } from 'react';
export default class AlbumList extends Component {	
	render() {
		return (
			<div className="albumListContainer">
				<ul>
					{this.props.albums.map(album => 
						<AlbumItem key={album.id} {...album} onClick={this.props.getAlbumTracks}/>
					)}
				</ul>
			</div>
		)
	}

}