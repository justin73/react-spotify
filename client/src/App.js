import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { SearchForm } from './component';
import NewSongs from './routes/NewSongs';
import ArtistList from './component/artistList'
import AlbumList from './component/albumList'
import { fetchArtists, fetchAlbums, fetchAlbumTracks } from './service/fetchSpotifyData';
import { Button } from 'react-bootstrap';
const Home = () => {
  return (
    <div>
      <Links /> 
    </div>
  )
}

const Links = () => {
  return (
    <div>
      <div>
        <Link to="/search"><Button bsStyle="danger">Search by Artist</Button></Link>
      </div>

      <div>
        <Link to="/newSongs"><Button bsStyle="danger">Checkout New Release</Button></Link>
      </div>
    </div>
  )
}

class App extends Component {
  constructor(){
    super();
    this.handleInputChange = this.handleInputChange.bind(this)
    this.callSpotifyAPI = this.callSpotifyAPI.bind(this)
    this.getArtistAlbumList = this.getArtistAlbumList.bind(this)
    this.getAlbumTracks = this.getAlbumTracks.bind(this)
    const params = this.getHashParams();
    const token = params.access_token;
    this.state={
      token: token,
      loggedIn: token? true: false,
      searchTerm:'',
      artists:[],
      albums:[]
    }
  }
  handleInputChange (evt) {
    this.setState({
      searchTerm: evt.target.value
    })
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

  render() {
    let content = null;
    if (this.state.token) {
      content = (
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Touchtunes Music Lib</h1>
          </header>
          <Router>
            <div>            
              <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/search" render={()=>
                  <SearchForm handleInputChange={this.handleInputChange} searchTerm={this.state.searchTerm} callSpotifyAPI={this.callSpotifyAPI}/>
                }/>
                <Route exact path="/search/:name" render={()=>
                  <ArtistList artists={this.state.artists} token={this.state.token} getArtistAlbumList={this.getArtistAlbumList}/>
                }/>
                <Route  exact path="/search/:name/albumList" render={()=>
                  <AlbumList albums = {this.state.albums} token={this.state.token} getAlbumTracks={this.getAlbumTracks}/>
                }/>    
                <Route exact path="/newSongs" component={NewSongs}/>  
              </div>
            </div>
          </Router>
        </div>
      )
    } else {
      content = (
        <a href='http://localhost:8888'> Login to Spotify </a>
      )
    }
    return (
      <div className="App">
        {content}
      </div>
    );
  }

  callSpotifyAPI (){
    fetchArtists(this.state.token, this.state.searchTerm).then((artistList)=>{
      this.setState({
        artists:artistList.artists.items,
      })
    })
  }
  getArtistAlbumList(evt) {
    console.log('====================================')
    console.log(evt.target)
    console.log('====================================')
    fetchAlbums(this.state.token, evt.target.id).then(albumlist=>{
      this.setState({
        albums:albumlist.items
      })
      console.log('====================================')
      console.log(albumlist.items)
      console.log('====================================')
    }
    )
  }

  getAlbumTracks(evt) {
    fetchAlbumTracks(this.state.token, evt.target.id).then((tracks)=>{
    })
  }
}

export default App;
