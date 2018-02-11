import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Button, Tooltip } from 'reactstrap';
import { fetchSpotifyData} from './service/fetchSpotifyData';
import { Home } from './routes';
import {SearchForm, ArtistList, AlbumList} from './component';
import store from './store';
import NewSongs from './routes/NewSongs';

class App extends Component {
  constructor(props){
    super(props);
    const params = this.getHashParams();
    const token = params.access_token;
    store.dispatch({type:'FETCH_TOKEN', payload: token})
    this.handleInputChange = this.handleInputChange.bind(this)
    this.getNewAlbums = this.getNewAlbums.bind(this)
    this.searchArtist = this.searchArtist.bind(this)
    this.getArtistAlbumList = this.getArtistAlbumList.bind(this)
    this.toggle = this.toggle.bind(this);
    this.state = {
      token: token,
      loggedIn: token? true: false,
      loading: false,
      searchTerm: '',
      artists: [],
      albums: [],
      tooltipOpen: false,
      disableBtn: true
    }
  }
  handleInputChange (evt) {
    this.setState({searchTerm: evt.target.value})
    evt.target.value.trim().length ? this.setState({disableBtn:false}) :this.setState({disableBtn:true})
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }
  toggle() {
    this.setState({ tooltipOpen: !this.state.tooltipOpen });
  }
  render() {
    let content = null;
    if (this.state.token) {
      content = (
        <Router>
          <div className="contentContainer">            
            <Route exact path="/" component={Home}/>
            <Route exact path="/search" render={()=>
              <SearchForm handleInputChange={this.handleInputChange} 
                searchTerm={this.state.searchTerm} 
                searchArtist={this.searchArtist} 
                disableBtn={this.state.disableBtn}
                loading={this.state.loading}
              />
            }/>
            <Route exact path="/search/:name" render={()=>
              <ArtistList 
                artists={this.state.artists} 
                getArtistAlbumList={this.getArtistAlbumList}
              />
            }/>
            <Route  exact path="/search/:name/albumList" render={()=>
              <AlbumList albums={this.state.albums}/>
            }/>    
            <Route exact path="/newSongs" render={()=>
              <NewSongs albums={this.state.albums} getNewAlbums={this.getNewAlbums}/>
            }/>
          </div>
        </Router>
      )
    } else {
      content = (
        <div className="loginContainer">
          <a href='http://localhost:8888' id="loginTooltip">
            <Button variant="raised" color="primary" className="loginBtn">Login to Spotify</Button>
          </a>
          <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="loginTooltip" toggle={this.toggle}>
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
        </header>
        <div className="App-body">
          {content}
        </div>
      </div>
    );
  }

  searchArtist () {
    this.setState({
      loading: true
    })
    fetchSpotifyData(store.getState().token, null, this.state.searchTerm, 'search').then((artistList) => {
      this.setState({
        artists:artistList.artists.items,
        loading: false
      })
    })
  }

  getArtistAlbumList(evt) {
    fetchSpotifyData(store.getState().token, evt.target.id, null, 'artists').then(albumlist=>{
      const ids = albumlist.items.map(album => album.id).join(',')
      return ids
    }).then((ids)=>{
      // Ablums by aritst don't contain date and popularity and tracks, therefore by looping though all the artist's albums,
      // I call another endpoint to get those missing information 
      fetchSpotifyData(store.getState().token, ids, null, 'albums').then((res)=>{
        this.setState({
          albums:res.albums
        })
      })
    })
  }
  
  getNewAlbums(evt) {
    console.log('====================================')
    console.log('call me maybe ----> ',evt.target.innerText)
    console.log('====================================')
    fetchSpotifyData(store.getState().token, null, null, 'browse', evt.target.innerText).then((res) => {
      const ids = res.albums.items.map(album => album.id).join(',')
      return ids
    }).then((ids)=>{
      fetchSpotifyData(store.getState().token, ids, null, 'albums').then((res)=>{
        this.setState({
          albums:res.albums
        })
      })
    })
  }
}

export default App;
