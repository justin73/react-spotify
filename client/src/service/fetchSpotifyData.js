const BASE_URL = 'https://api.spotify.com/v1/';
let ENDPOINT_PATH = '';
let PARAMS={};
let QUERY='';
const esc = encodeURIComponent;

const parseParams = (params)=>{
  return Object.keys(PARAMS)
          .map(k => esc(k) + '=' + esc(PARAMS[k]))
          .join('&')
}
export const fetchSpotifyData = (accessToken, id, searchTerm, urlType, country='') => {
  
  switch (urlType) {
    case 'artists':
      ENDPOINT_PATH = `artists/${id}/albums`
      QUERY = ''
      break;
    case 'albums':
      ENDPOINT_PATH = `albums?`
      PARAMS = {
        'ids': id,
        'market': 'US'
      }
      QUERY = parseParams(PARAMS)
      break;
    case 'browse':
      ENDPOINT_PATH = `browse/new-releases?`
      PARAMS = {
        'country': country,
      }
      QUERY = parseParams(PARAMS)
      break;
    default:
      ENDPOINT_PATH = `search?`
      PARAMS = {
        'query': searchTerm,
        'offset': 0,
        'type': 'artist',
        'market': 'US'
      }
      QUERY = parseParams(PARAMS)
      break;
  }

  const requestUrl = BASE_URL+ENDPOINT_PATH;
  const request = new Request(requestUrl + QUERY, {
    headers: new Headers({
      'Authorization': 'Bearer ' + accessToken
    })
  })
  
  return fetch(request).then(res=>res.json())

}