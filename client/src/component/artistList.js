//Stateless component 
import React from 'react'
import { ArtistItem } from './artistItem';
import { Link } from 'react-router-dom';
import './artistList.css'
import { Container, Row, Col } from 'reactstrap';

export const  ArtistList = (props) => {
	let availableList = null
	if(props.artists.length) {
		availableList = (
			<Row>
				{
					props.artists.map(artist =>
						<Col key={artist.id} sm="12" md="6" id={artist.id}>
							<Link to={`/search/${artist.name}/albumList`}> 
								<ArtistItem id={artist.id} {...artist} getArtistAlbumList={props.getArtistAlbumList}/>
							</Link>
						</Col>
					)
				}
			</Row>
		)
	} else {
		if (props.loading) {
			availableList = (
				<p>Loading...</p>
			)
		} else {
			availableList = (
				<p>No Results Found!</p>
			)
		}

	}

	return (
		<Container className="artistContainer" >
			{availableList}
		</Container>
	)
}