//Stateless component 
import React from 'react'
import { ArtistItem } from './artistItem';
import { Component } from 'react';
import { fetchAlbums, fetchAlbumTracks } from '../service/fetchSpotifyData';
import { Link } from 'react-router-dom';
class ArtistList extends Component {
	constructor(props) {
		super(props);
		this.getArtistAlbumList = this.getArtistAlbumList.bind(this)
		this.state= {
      artists:[],
      albums:[]
    };
	}

	render() {
		console.log('====================================')
		console.log(this.props.artists)
		console.log('====================================')
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

	getArtistAlbumList(evt) {
		console.log('====================================');
		console.log('call getArtistAlbumList');
		console.log('====================================');
    // fetchAlbums(this.props.token, evt.target.id).then(albumlist=>{
    //   this.setState({
    //     albums:albumlist.items
    //   })
    // }
    // )
  }

}


export default ArtistList