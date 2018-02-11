import React from 'react'
import './artistItem.css'
import { Card, CardImg, CardBody,
  CardTitle } from 'reactstrap';

export const ArtistItem = (props) => {
  let image
  props.images.length ? image= props.images[1].url: image = null
  return (
    <Card onClick={props.getArtistAlbumList} id={props.id}>
      <CardImg id={props.id} top width="100%" src= {image} alt={props.name} />
      <CardBody id={props.id}>
        <CardTitle id={props.id}>{props.name}</CardTitle>
      </CardBody>
    </Card>
  )
}