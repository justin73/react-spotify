
const initState = {
  token:'',
  searchTerm: '',
  albumList:''
}

export default (state=initState, action) => {
  switch(action.type) {
    case 'FETCH_TOKEN':
      console.log('====================================');
      console.log('recuder is called');
      console.log('====================================');
      return {...state, token: action.payload}
    default:
      return state
  }
}