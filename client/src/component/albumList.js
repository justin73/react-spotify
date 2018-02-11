//Stateless component 
import React from 'react'
import AlbumItem from './albumItem';
import { Container, Row, Col } from 'reactstrap';

export const AlbumList = (props) => {
	return (
		<Container className="artistContainer" >
			<Row>
				{props.albums.map(album => 
					<Col key={album.id} sm="12" md="4">
						<AlbumItem key={album.id} {...album} newRelease={props.newRelease} searchArtist={props.searchArtist} handleInputChange={props.handleInputChange}/>
					</Col>
				)}
			</Row>
		</Container>
	)
}