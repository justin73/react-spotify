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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Touchtunes Music Lib</h1>
        </header>
        <Router>
          <div>            
            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/search" component={Search}/>  
              <Route path="/newSongs" component={NewSongs}/>  
            </div>
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;
