import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers/demoReducer';
import {composeWithDevTools} from 'redux-devtools-extension'
//to support asynchronous actions 
import thunk from 'redux-thunk';


export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)) )