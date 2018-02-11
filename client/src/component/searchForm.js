import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
export const SearchForm = (props) => (
  <form>
    <input type="text" 
      value={props.searchTerm} 
      onChange={props.handleInputChange}/>
    <Link to={`/search/${props.searchTerm}`}>
      <Button onClick={props.callSpotifyAPI}>Search By Artist</Button>
    </Link>
    
  </form>
)

SearchForm.propTypes = {
  searchTerm: PropTypes.string.isRequired
}