import React from 'react';
import { Component } from 'react';
import './albumItem.scss';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Collapse } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
export default class AlbumItem extends Component {
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.tooltipToggle = this.tooltipToggle.bind(this);
    this.state= {
      fadeIn: false,
      tooltipOpen: false,
    };
  }
  render(){
    const image = this.props.images.length ? this.props.images[1].url:null;
    const genres = this.props.genres.length ? this.props.genres.join(','): 'N/A';
    const rating = this.props.popularity/20.00 ;
    let artist = null;
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
    // const tempTime = moment.duration(this.props.tracks.items);

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
                    <div className="trackInfo" key={item.id}>
                      <span className="trackName" id="trackInfoTooltip"> 
                        {item.track_number} {item.name}
                      </span> 
                      <span className="trackDuration">
                        {moment.duration(item.duration_ms).format('mm:ss')}
                      </span>
                    </div>
                )}
              </CardText>
            </Collapse>
        </CardBody>
      </Card>
    )
  }
  tooltipToggle () {
    this.setState({ tooltipOpen: !this.state.tooltipOpen });
  }
  toggle() {
    this.setState({
      fadeIn: !this.state.fadeIn
    })
  }
}