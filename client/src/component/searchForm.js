import React from 'react';
import { Link } from 'react-router-dom';
import './searchForm.css';
import TextField from 'material-ui/TextField';
import { Button } from 'reactstrap';

export const SearchForm = (props) => {
    const handleKeyPress = (evt) => {
      if (evt.key === 'Enter' & evt.target.value.trim().length>0) {
        evt.preventDefault();
        props.searchArtist()
      }
    }
    return (
      <form className="searchForm">
        <TextField type="text" 
          label="Search By Artist"
          value={props.searchTerm} 
          onChange={props.handleInputChange}
          margin="normal"
          onKeyPress={handleKeyPress}
        />
        <Link to={`/search/${props.searchTerm}`}>
          <Button variant="raised" color="secondary" disabled={props.disableBtn}  onClick={props.searchArtist}>Search By Artist</Button>
        </Link>
      </form>
    )
}
