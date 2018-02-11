import React from 'react'
import { Component } from 'react';
import './albumItem.css'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Collapse } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';

export default class AlbumItem extends Component {
  constructor(props){
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state= {
      fadeIn: false
    }
  }
  render(){
    const image = this.props.images.length ? this.props.images[1].url:null
    const genres = this.props.genres.length ? this.props.genres.join(','): 'N/A'
    const rating = this.props.popularity/20.00 
    let artist = null
    if (this.props.newRelease) {
      artist = (
        <div>
          {
            this.props.artists.map(artist => 
              <p key={artist.id}>{artist.name}</p>
            )
          }
        </div>
      )
    }
    return (
      <Card onClick={this.toggle} style={{marginTop:20}}>
        <CardImg top width="100%" src={image} alt={this.props.name} />
        <CardBody>
          <CardTitle>{this.props.name}</CardTitle>
          <CardSubtitle >
            {artist}
            <div className="genres">{genres}</div>
            <div className="otherInfo">
              <span className="pop">
                <StarRatingComponent name="popularity" editing={false} starCount={5} value={rating}/>
              </span>
              <span className="releaseDate">{this.props.release_date}</span>
            </div>
          </CardSubtitle>
            <Collapse isOpen={this.state.fadeIn} className="trackList">
              <CardText> 
                {
                  this.props.tracks.items.map(item =>
                    <span className="trackInfo" key={item.id}> 
                      {item.track_number} {item.name}
                    </span> 
                )}
              </CardText>
            </Collapse>
        </CardBody>
      </Card>
    )
  }

  toggle() {
    this.setState({
      fadeIn: !this.state.fadeIn
    })
  }
}