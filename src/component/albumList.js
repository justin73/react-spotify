//Stateless component 

import React from 'react'
import { AlbumItem } from './albumItem';

export const AlbumList = (props) => {	
	return (
		<div className="albumListContainer">
			<ul>
				{props.albums.map(album => <AlbumItem key={album.id} {...album}/>)}
			</ul>
		</div>
	)
}