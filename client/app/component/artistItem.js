import React from 'react';
import './artistItem.scss';
import { Card, CardImg, CardBody,
  CardTitle } from 'reactstrap';

const defaultImgUrl = 'https://www.slikouronlife.co.za/themes/slikourapp/assets/images/artist-placeholder.png'
export const ArtistItem = (props) => {
  const image = props.images.length ? props.images[1].url: defaultImgUrl
  return (
    <Card onClick={props.getArtistAlbumList} id={props.id}>
      <CardImg id={props.id} top width="100%" src= {image} alt={props.name} />
      <CardBody id={props.id}>
        <CardTitle id={props.id}>{props.name}</CardTitle>
      </CardBody>
    </Card>
  )
}