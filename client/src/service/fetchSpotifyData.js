export const fetchAlbums = (accessToken,id) => {
  const baseUrl = `https://api.spotify.com/v1/artists/${id}/albums`

  const request = new Request(baseUrl, {
    headers: new Headers({
      'Authorization': 'Bearer ' + accessToken
    })
  })

 return fetch(request).then(res=>res.json())
};

export const fetchAlbumTracks = (accessToken,id) => {
  const baseUrl = `https://api.spotify.com/v1/albums/${id}/tracks`

  const request = new Request(baseUrl, {
    headers: new Headers({
      'Authorization': 'Bearer ' + accessToken
    })
  })

 return fetch(request).then(res=>res.json())
};

// export const fetchNewReleases = (accsssToken) => {
//   const baseUrl = `https://api.spotify.com/v1/browse/new-releases`
//   const request = new Request(baseUrl, {
//     headers: new Headers({
//       'Authorization': 'Bearer ' + accessToken
//     })
//   })
//   return fetch(request).then(res=>res.json())
// }

export const fetchArtists = (accessToken, artist) => {
  const baseUrl = 'https://api.spotify.com/v1/search?'
  const params = {
    'query': artist,
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

