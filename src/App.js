import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchForm, ArtistList, AlbumList } from './component';
import { fetchArtists, fetchAlbums } from './service/fetchSpotifyData';


class App extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this)
    this.callSpotifyAPI = this.callSpotifyAPI.bind(this)
    this.getArtistAlbumList = this.getArtistAlbumList.bind(this)
    this.state= {
      token: '',
      searchTerm: '',
      artists:[],
      albums:[]
    };
  }
  handleInputChange (evt) {
    this.setState({
      searchTerm: evt.target.value
    })
  }
  componentDidMount () {
    let hashParams = {};
		let e, r = /([^&;=]+)=?([^&;]*)/g,
			q = window.location.hash.substring(1);
		while ( e = r.exec(q)) {
			hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    this.setState({
      token: hashParams.access_token
    })
    fetchArtists(hashParams.access_token).then(artistList=>{

    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Touchtunes Music Lib</h1>
        </header>
        <SearchForm handleInputChange={this.handleInputChange} searchTerm={this.state.searchTerm} callSpotifyAPI={this.callSpotifyAPI}/>
        <ArtistList artists={this.state.artists} getArtistAlbumList={this.getArtistAlbumList}/>
        <AlbumList albums={this.state.albums}/>
      </div>
    );
  }

  callSpotifyAPI (){
    let hashParams = {};
		let e, r = /([^&;=]+)=?([^&;]*)/g,
			q = window.location.hash.substring(1);
		while ( e = r.exec(q)) {
			hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    fetchArtists(hashParams.access_token).then((artistList)=>{
      this.setState({artists:artistList.artists.items})
    }
    )
  }

  getArtistAlbumList(evt) {
    let hashParams = {};
		let e, r = /([^&;=]+)=?([^&;]*)/g,
			q = window.location.hash.substring(1);
		while ( e = r.exec(q)) {
			hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    console.log('====================================');
    console.log(evt.target.id);
    console.log('====================================');
    fetchAlbums(hashParams.access_token, evt.target.id).then(albumlist=>{
      console.log('====================================')
      console.log(albumlist.items)
      this.setState({
        albums:albumlist.items
      })
      console.log('====================================')
    }
      // this.setState({albumList: ''})
    )
  }
}

export default App;
