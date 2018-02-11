//Stateless component 
import React from 'react'
import { ArtistItem } from './artistItem';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import './albumList.css'
class ArtistList extends Component {
	constructor(props) {
		super(props);
		this.state= {
      artists:[],
      albums:[]
    };
	}

	render() {
		return (
			<div className="artistContainer">
				<ul>
					{
						this.props.artists.map(artist =>
							<Link key={artist.id} to={`/search/${artist.name}/albumList`}> 
								<ArtistItem {...artist} getArtistAlbumList={this.props.getArtistAlbumList}/>
							</Link>
						)
					}
				</ul>
			</div>
		)
	}
}


export default ArtistList