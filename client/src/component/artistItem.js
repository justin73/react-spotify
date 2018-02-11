import React from 'react'
import './artistItem.css'
export const ArtistItem = (props) => {
  let image
  props.images.length ? image = <img className="profileImg" alt={props.images[1].url} src={props.images[1].url} id={props.id}/> : image = <img className="profileImg" alt='No Image Available' src='' id={props.id}/>
  return (
      <li id={props.id}>
        <div className="profileContainer" onClick={props.getArtistAlbumList} id={props.id}>
          {image}
          <p id={props.id}className="profileName">{props.name}</p>
        </div>
      </li>
  )
}