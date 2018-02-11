// import React, { Component } from 'react';
// import { SearchForm } from '../component';
// import ArtistList from '../component/artistList'
// import AlbumList from '../component/albumList'
// import { fetchArtists, fetchAlbums, fetchAlbumTracks } from '../service/fetchSpotifyData';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

// class Search extends Component {
//   constructor(props) {
//     super(props);
//     this.handleInputChange = this.handleInputChange.bind(this)
//     this.callSpotifyAPI = this.callSpotifyAPI.bind(this)
//     this.getArtistAlbumList = this.getArtistAlbumList.bind(this)
//     this.getAlbumTracks = this.getAlbumTracks.bind(this)
//     this.state= {
//       token: '',
//       searchTerm: '',
//       artists:[],
//       albums:[]
//     };
//   }
//   handleInputChange (evt) {
//     this.setState({
//       searchTerm: evt.target.value
//     })
//   }
//   componentDidMount () {
//     this.setState({
//       token: this.props.token
//     })
//   }
//   render() {
//     return (
//       <div className="searchContainer">
//         <SearchForm handleInputChange={this.handleInputChange} searchTerm={this.props.searchTerm} callSpotifyAPI={this.props.callSpotifyAPI}/>
//         {/* <ArtistList artists={this.state.artists} getArtistAlbumList={this.getArtistAlbumList}/>  */}
//         {/* <AlbumList albums={this.state.albums} getAlbumTracks={this.getAlbumTracks}/> */}

//         {/* <Router>          
//           <div>
//             <Route exact path="/search/:name" render={()=>
//               <ArtistList artists={this.state.artists} token={this.state.token} getArtistAlbumList={this.getArtistAlbumList}/>
//             }/>
//             <Route  exact path="/search/:name/albumList" render={()=>
//               <AlbumList albums = {this.state.albums} token={this.state.token} getAlbumTracks={this.getAlbumTracks}/>
//             }/>  
//           </div>
//         </Router> */}
//       </div>
//     );
//   }

//   callSpotifyAPI (){
//     fetchArtists(this.state.token, this.state.searchTerm).then((artistList)=>{
//       this.setState({
//         artists:artistList.artists.items,
//       })
//     })
//   }

//   getArtistAlbumList(evt) {
//     fetchAlbums(this.state.token, evt.target.id).then(albumlist=>{
//       this.setState({
//         albums:albumlist.items
//       })
//     }
//     )
//   }

//   getAlbumTracks(evt) {

//     fetchAlbumTracks(this.state.token, evt.target.id).then((tracks)=>{
//       console.log('====================================')
//       console.log(tracks.items)
//       console.log('====================================')
//     })
//   }
// }

// export default Search;