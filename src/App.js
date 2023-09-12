import Router from './Code/Router'
import React, { Component ,useEffect} from 'react'
import { post, get } from './Utils/request';
import store from './Code/CommonComponent/Dictionary/store';
import { fetchDict } from './Code/CommonComponent/Dictionary/actions';

Component.prototype.get = get
Component.prototype.post = post



function App() {
  useEffect(() => {
    store.dispatch(fetchDict())
  }, [])

  return (
    <div>
      <Router ></Router>
    </div>
  )
}

export default App;