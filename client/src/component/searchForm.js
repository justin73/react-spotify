import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export const SearchForm = (props) => (
  <form>
    <input type="text" 
      value={props.searchTerm} 
      onChange={props.handleInputChange}/>
    <Link to={`/search/${props.searchTerm}`}>
      <button onClick={props.callSpotifyAPI}>Search By Artist</button>
    </Link>
    
  </form>
)

SearchForm.propTypes = {
  searchTerm: PropTypes.string.isRequired
}