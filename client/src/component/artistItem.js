import React from 'react'
import { Link } from 'react-router-dom';

export const ArtistItem = (props) => {
  let image
  props.images.length ? image = <img alt={props.images[1].url} src={props.images[1].url}/> : image = <div>No Image Available</div>
  return (
      <li>
        <div onClick={props.getArtistAlbumList} id={props.id}>
          {image}
          <p>{props.name}</p>
        </div>
      </li>
  )
}