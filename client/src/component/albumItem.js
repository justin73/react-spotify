import React from 'react'
import { Component } from 'react';
import { fetchArtists, fetchAlbums, fetchAlbumTracks } from '../service/fetchSpotifyData';
export default class AlbumItem extends Component {
  constructor(props){
    super(props)
    this.getAlbumTracks = this.getAlbumTracks.bind(this)
    this.state= {
      trackList: []
    }
  }
  render(){
    let image
    this.props.images.length ? image = <img alt={this.props.images[1].url} src={this.props.images[1].url}/> : image = <div>No Image Available</div>
    let list = null;
    if (this.state.trackList.length) {
      list = (
        <div className="trackList">
          {
            this.state.trackList.map(item =>
              <div key={item.id}> 
                <span>{item.track_number}</span> <span>{item.name}</span>
              </div>
          )}
        </div>
      )
    }
    return (
      <li>
        <div id={this.props.id} onClick={this.getAlbumTracks}>
          {image}
          <p>{this.props.name}</p>
        </div>
        {list}
      </li>
    )
  }
  getAlbumTracks(evt) {
    this.setState({
      trackList: []
    })
    fetchAlbumTracks(this.props.token, evt.target.id).then((tracks)=>{
      this.setState({
        trackList: tracks.items
      })
    })
  }
}