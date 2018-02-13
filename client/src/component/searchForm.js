import React from 'react';
import { Link } from 'react-router-dom';
import './searchForm.scss';
import TextField from 'material-ui/TextField';
import { Button } from 'reactstrap';
import store from '../store';
import { fetchSpotifyData} from '../service/fetchSpotifyData';
import { setSearchValue, setBtnStatus, getArtists, loading } from '../reducers/demoReducer';

// TODO: change to class based component to erase the previous content

export const SearchForm = (props) => {
  const artistName = store.getState().searchTerm
  const updateSearchTerm = (evt) => {
    const disableBtn = evt.target.value.trim().length ? false : true
    store.dispatch(setSearchValue(evt.target.value))
    store.dispatch(setBtnStatus(disableBtn)) 
  }
  const search = () => {
    fetchSpotifyData(store.getState().token, null, store.getState().searchTerm, 'search').then((res) => {
      store.dispatch(getArtists(res.artists.items))
      store.dispatch(loading(false))
    })
  }
  return (
    <form className="searchForm">
      <TextField type="text" 
        label="Search By Artist"
        value={artistName} 
        onChange={updateSearchTerm}
        margin="normal"
      />
      <Link to={`/search/${artistName}`}>
        <Button variant="raised" 
          color="primary" 
          disabled={store.getState().disableBtn}  
          type="submit" 
          onClick={search}
        >
          Search By Artist
        </Button>
      </Link>
    </form>
  )
}

// TODO: find the solution to use connect within stateless component 
// export default connect(
//   (state) => ({token: state.token, albumList: state.albumList}),
//   {cleanList, fetchAlbums}
// )(SearchForm)