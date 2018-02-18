import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers/demoReducer';
import {composeWithDevTools} from 'redux-devtools-extension'
//to support asynchronous actions 
import thunk from 'redux-thunk';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
 };

const persistDemoReducer = persistReducer(persistConfig, reducer);
export const store = createStore(persistDemoReducer, composeWithDevTools(applyMiddleware(thunk)) );
// export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)) )
export const persistor = persistStore(store);