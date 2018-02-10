export const fetchAlbums = (accessToken,id) => {
  const baseUrl = `https://api.spotify.com/v1/artists/${id}/albums?`

  const request = new Request(baseUrl, {
    headers: new Headers({
      'Authorization': 'Bearer ' + accessToken
    })
  })

 return fetch(request).then(res=>res.json())
};

export const fetchNewReleases = (accsssToken) => {}

export const fetchArtists = (accessToken) => {
  const baseUrl = 'https://api.spotify.com/v1/search?'
  const params = {
    'query': 'Justin',
    'offset': 0,
    'type': 'artist',
    'market': 'US'
  }
  
  const esc = encodeURIComponent;
  let query = Object.keys(params)
           .map(k => esc(k) + '=' + esc(params[k]))
           .join('&')
  const request = new Request(baseUrl+query, {
    headers: new Headers({
      'Authorization': 'Bearer ' + accessToken
    })
  })

 return fetch(request).then(res=>res.json())
};