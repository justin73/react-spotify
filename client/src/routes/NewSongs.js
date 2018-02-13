import React, { Component } from 'react';
import { AlbumList } from '../component/albumList';
import './NewSongs.scss';
import { Dropdown } from '../component/dropdown';
import { fetchAlbums, cleanList } from '../reducers/demoReducer';
import { connect } from 'react-redux';
//This is the component to demostrate the react componnent lifecycle
class NewSongs extends Component {
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);
    this.state= {
      dropdownOpen: false,
      defaultTxt: 'View By Country',
      albums:[]
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  // before component renders, if the album list is not empty then clean the previous results
  componentWillMount() {
    if (this.props.albumList) {
      this.props.cleanList()
    }
  }
  // when change pages, the current result should be ereased; this could be moved to the artist album list component.
  componentWillUnmount() {
    this.props.cleanList()
  }

  select(event) {
    event.stopPropagation();
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      defaultTxt: event.target.innerText
    });
    
    this.props.fetchAlbums(this.props.token, null, null, 'browse', event.target.innerText)
  }

  render() {
    return (
      <div className="newsongs-container">
        <Dropdown 
          dropdownOpen={this.state.dropdownOpen} 
          toggle={this.toggle} 
          select={this.select}
          defaultTxt={this.state.defaultTxt}
        ></Dropdown>
        {this.props.albumList? <AlbumList/> : null}
      </div>
    );
  }
}

export default connect(
  (state) => ({token: state.token, albumList: state.albumList}),
  {cleanList, fetchAlbums}
)(NewSongs)