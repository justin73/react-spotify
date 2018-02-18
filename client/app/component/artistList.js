//Stateless component 
import React from 'react'
import { ArtistItem } from './artistItem';
import { Link } from 'react-router-dom';
import './artistList.scss';
import { Container, Row, Col } from 'reactstrap';
import { store } from'../store';
import { fetchAlbums } from '../reducers/demoReducer';

// TODO: change it to class based so that I could use lifecyle to remove previous list when component is updated
export const  ArtistList = (props) => {
	const getArtistAlbums = (evt) => {
		store.dispatch(fetchAlbums(store.getState().token, evt.target.id, null, 'artists', null))
	}
	let availableList = null;
	
	if (store.getState().loading) {
		availableList = (
			<p className="status">Loading...</p>
		)
	} else {
		if(store.getState().artists.length) {
			availableList = (
				<Row>
					{
						store.getState().artists.map(artist =>
							<Col key={artist.id} xs="12" sm="12" md="6" lg="4" id={artist.id}>
								<Link to={`/search/${artist.name}/albumList`}> 
									<ArtistItem id={artist.id} {...artist} getArtistAlbumList={getArtistAlbums}/>
								</Link>
							</Col>
						)
					}
				</Row>
			)
		} else {
			availableList = (
				<p className="status">No Results Found!</p>
			)
		}
	}

	return (
		<Container className="artistContainer" >
			{availableList}
		</Container>
	)
}