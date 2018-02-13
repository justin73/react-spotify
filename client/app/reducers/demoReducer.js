
import { fetchSpotifyData } from '../service/fetchSpotifyData';

const initState = {
  token: '',
  searchTerm: '',
  artists: [],
  albumList: [],
  tooltipOpen: false,
  disableBtn: true,
  loading: true
}

const FETCH_REFRESH_TOKEN = 'FETCH_REFRESH_TOKEN'
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE'
const CHANGE_TOOLTIP = 'CHANGE_TOOLTIP'
const FETCH_ARTISTS = 'FETCH_ARTISTS'
const FETCH_ALBUMS = 'FETCH_ALBUMS'
const FETCH_TOKEN = 'FETCH_TOKEN'
const DISABLE_BTN = 'DISABLE_BTN'
const LOADING = 'LOADING'
const CLEAN_LIST= 'CLEAN_LIST'

export const getRefreshToken = (val) => ({type: FETCH_REFRESH_TOKEN, payload: val})
export const setSearchValue = (val) => ({type: SET_SEARCH_VALUE, payload: val})
export const updateTooltip = (val) =>({type: CHANGE_TOOLTIP, payload: val})
export const setBtnStatus = (val) => ({type: DISABLE_BTN, payload: val})
export const getArtists= (val) => ({type: FETCH_ARTISTS, payload: val})
export const getAlbums = (val) => ({type: FETCH_ALBUMS, payload: val})
export const getToken = (val) => ({type: FETCH_TOKEN, payload: val})
export const loading = (val) => ({type: LOADING, payload: val})
export const cleanList = () => ({type:CLEAN_LIST})

// dispatch asynchronous action using thunk
export const fetchAlbums = (token, id, searchTerm, type, country) => {
  return (dispatch) => {
    fetchSpotifyData(token, id, searchTerm, type, country)
      .then((res) => {
        const albums = type === 'artists' ?  res :res.albums
        const ids = albums.items.map(album => album.id).join(',')
        return ids
        })
      .then((ids) => {
        fetchSpotifyData(token, ids, null, 'albums').then((res) => {  
          dispatch(getAlbums(res.albums))
        })
      })
  }
}

export default (state=initState, action) => {
  switch(action.type) {
    case FETCH_TOKEN:
      return {...state, token: action.payload}
    case FETCH_REFRESH_TOKEN:
      return {...state, refreshToken: action.payload}
    case FETCH_ALBUMS:
      return {...state, albumList: action.payload}
    case FETCH_ARTISTS:
      return {...state, artists: action.payload}
    case LOADING:
      return {...state, loading: action.payload}
    case SET_SEARCH_VALUE: 
      return {...state, searchTerm: action.payload}
    case DISABLE_BTN:
      return {...state, disableBtn: action.payload}
    case CHANGE_TOOLTIP:
      return {...state, tooltipOpen: action.payload}
    case CLEAN_LIST: 
      return {...state, albumList: []}
    default:
      return state
  }
}