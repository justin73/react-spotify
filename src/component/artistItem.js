import React from 'react'


export const ArtistItem = (props) => {
  let image
  props.images.length ? image = <img src={props.images[1].url}/> : image = <div>No Image Available</div>
  return (
    <li>
      <div>
        {image}
        <p>{props.name}</p>
      </div>
    </li>
  )
}