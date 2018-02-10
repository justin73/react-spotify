import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state= {
      songs:[],
      artits:[]
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Touchtunes Music Lib</h1>
        </header>
        <button onClick={this.callSpotifyAPI}>Search By Artist (Justin)</button>
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

    const baseUrl = 'https://api.spotify.com/v1/search?'
    const params = {
      'query': 'Justin',
      'offset': 0,
      'limit': 20,
      'type': 'artist',
      'market': 'US'
    }
    
    const esc = encodeURIComponent;
    let query = Object.keys(params)
             .map(k => esc(k) + '=' + esc(params[k]))
             .join('&')

    const request = new Request(baseUrl+query, {
      headers: new Headers({
        'Authorization': 'Bearer ' + hashParams.access_token
      })
    });
    fetch(request).then(res=>res.json()).then((data)=>{
      console.log('====================================')
      console.log(data)
      console.log('====================================')
    })
  }
}

export default App;
