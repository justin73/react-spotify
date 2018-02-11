import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Search from './routes/Search';
import NewSongs from './routes/NewSongs';

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
        <Link to="/search"><button>Search by Artist</button></Link>
      </div>

      <div>
        <Link to="/newSongs"><button>Checkout New Release</button></Link>
      </div>
    </div>
  )
}

class App extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    this.state={
      token: token,
      loggedIn: token? true: false
    }
  }

  getHashParams() {
    let hashParams = {};
		let e, r = /([^&;=]+)=?([^&;]*)/g,
			q = window.location.hash.substring(1);
		while ( e = r.exec(q)) {
			hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams
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
                  <Search token={this.state.token}/>
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
}

export default App;
