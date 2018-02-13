//Stateless component 
import React from 'react';
import AlbumItem from './albumItem';
import { Container, Row, Col } from 'reactstrap';
import './albumList.scss';
import store from '../store';
// change to class based component to erase the previous content
export const AlbumList = (props) => {
	// in the API res, the albums are already sorted based on release date. 
	// add loading text
	return (
		<Container className="artistContainer" >
			<Row>
				{store.getState().albumList.map(album => 
					<Col key={album.id} xs="12" sm="12" md="6" lg="4">
						<AlbumItem key={album.id} {...album} />
					</Col>
				)}
			</Row>
		</Container>
	)
}