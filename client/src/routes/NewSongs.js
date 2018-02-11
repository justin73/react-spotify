import React, {Component} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { AlbumList } from '../component/albumList';
export default class NewSongs extends Component {
  constructor(props){
    super(props)
    this.toggle = this.toggle.bind(this)
    this.select = this.select.bind(this)
    this.state= {
      dropdownOpen: false,
      value: 'View By Country'
    }
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  select(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      value: event.target.innerText
    });
    this.props.getNewAlbums(event)
  }

  render() {
    let newAlbums = null
    if(this.props.albums) {
      newAlbums = <AlbumList 
        albums={this.props.albums} newRelease={true} searchArtist={this.props.searchArtist} handleInputChange={this.props.handleInputChange}
      />
    }
    return (
      <div>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            {this.state.value}
          </DropdownToggle>
          <DropdownMenu>
            {/* TODO: get available markets from spotify and iterate */}
            <DropdownItem>
              <div onClick={this.select} id="US">
                US
              </div>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              <div onClick={this.select}  id="CA">
                CA
              </div>
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>

        {newAlbums}
        
      </div>
    );
  }
} 