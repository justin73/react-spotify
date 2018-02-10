import React from 'react'

export const AlbumItem = (props) => {
  let image
  console.log('====================================');
  console.log(props.id);
  console.log('====================================');
  props.images.length ? image = <img alt={props.images[1].url} src={props.images[1].url}/> : image = <div>No Image Available</div>
  return (
    <li>
      <div id={props.id} onClick={props.getAlbumTracks}>
        {image}
        <p>{props.name}</p>
      </div>
    </li>
  )
}