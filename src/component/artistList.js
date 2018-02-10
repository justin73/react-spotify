//Stateless component 

import React from 'react'
import { ArtistItem } from './artistItem';

export const ArtistList = (props) => {
	console.log(props.artists);
	
	return (
		<div className="artistContainer">
			<ul>
				{props.artists.map(artist => <ArtistItem key={artist.id} {...artist}/>)}
			</ul>
		</div>
	)
}