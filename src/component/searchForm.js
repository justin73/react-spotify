import React from 'react';

export const SearchForm = (props) => (
  <form>
    <input type="text" 
      value={props.searchTerm} 
      onChange={props.handleInputChange}/>
    <button onClick={props.callSpotifyAPI}>Search By Artist (Justin)</button>
  </form>
)
