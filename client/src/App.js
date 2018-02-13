import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Button, Tooltip } from 'reactstrap';
import { Home } from './routes';
import { SearchForm, ArtistList, AlbumList } from './component';
import NewSongs from './routes/NewSongs';
import { 
  getToken, 
  updateTooltip, 
  cleanList, 
  getAlbums, 
  setSearchValue, 
  loading, 
  setBtnStatus, 
  getArtists,
  fetchAlbums } from './reducers/demoReducer';
import {connect} from 'react-redux';


class App extends Component {
  constructor(props){
    super(props);
    this.getAlbums = this.getAlbums.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentWillMount() {
    const params = this.getHashParams();
    this.props.getToken(params.access_token)
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }

    return hashParams;
  }

  toggle() {
    this.props.updateTooltip(!this.props.tooltipOpen)
  }

  render() {
    let content = null;

    // presist redux value on page refresh 
    if (this.props.token) {
      content = (
        <Router>
          <div className="contentContainer">            
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={SearchForm}/>
            <Route exact path="/search/:name" render={({match})=>
              // with this, i could move the fetch artist inside the ArtistList componnet
              <ArtistList filter={match.params.filter}/>
            }/>
            <Route  exact path="/search/:name/albumList" component={AlbumList}/>    
            <Route exact path="/newSongs" component={NewSongs}/>
          </div>
        </Router>
      )
    } else {
      content = (
        <div className="loginContainer">
          <a href='http://localhost:8888' id="loginTooltip">
            <Button variant="raised" color="primary" className="loginBtn">Login to Spotify</Button>
          </a>
          <Tooltip placement="right" isOpen={this.props.tooltipOpen} target="loginTooltip" toggle={this.toggle}>
            This web app requires an active Spotify account, please log in first
          </Tooltip>
        </div>
      )
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TouchTunes - Spotify - React</h1>
          <p className="App-subtitle">By Moi, Meng</p>
        </header>
        <div className="App-body">
          {content}
        </div>
      </div>
    );
  }

  getAlbums(evt, type) {
    const artistId = type === 'artists' ?  evt.target.id : null
    this.props.fetchAlbums(this.props.token, artistId, null, type, evt.target.innerText)
  }
}

export default connect(
  (state) => state, 
  {getToken, updateTooltip, cleanList, getAlbums, setSearchValue, loading, getArtists, setBtnStatus, fetchAlbums}
)(App)