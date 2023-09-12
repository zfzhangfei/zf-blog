import { applyMiddleware,createStore } from 'redux';
import thunk from 'redux-thunk';
import { fetchDict } from './actions';
import reducer from './reducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}
// config persist
const persistedReducer = persistReducer(persistConfig, reducer)

// create store
const store = createStore(persistedReducer , applyMiddleware(thunk))

// initialize persistor
const persistor = persistStore(store)  

// export 
export default store
