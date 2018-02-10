//Stateless component 

import React from 'react'
import { ArtistItem } from './artistItem';

export const ArtistList = (props) => {	
	return (
		<div className="artistContainer">
			<ul>
				{props.artists.map(artist => <ArtistItem key={artist.id} {...artist} getArtistAlbumList={props.getArtistAlbumList}/>)}
			</ul>
		</div>
	)
}