import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store'

const render = () => {
  const state = store.getState()

  ReactDOM.render(<App token={state.token}/>, document.getElementById('root'));
  
}

render()

store.subscribe(render)

// setTimeout(() => {
//   console.log('====================================');
//   console.log('call reducer');
//   console.log('====================================');
//   store.dispatch({type:'FETCH_TOKEN', payload: 'fdasfs'})
// }, 1000);

registerServiceWorker();