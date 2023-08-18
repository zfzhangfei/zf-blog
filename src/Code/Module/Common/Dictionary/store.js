import { applyMiddleware,createStore } from 'redux';
import thunk from 'redux-thunk';
import { fetchDict } from './actions';
import reducer from './reducer';

const store = createStore(
  reducer, 
  applyMiddleware(thunk)
);
store.dispatch(fetchDict());
export default store;