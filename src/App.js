import React, { Component, useEffect } from 'react'
import { post, get } from './Utils/request';
import store from './Code/CommonComponent/Dictionary/store';
import { fetchDict } from './Code/CommonComponent/Dictionary/actions';
import Routers from './CodeTwo/Routes/Routers';


Component.prototype.get = get
Component.prototype.post = post



function App() {
  useEffect(() => {
    store.dispatch(fetchDict())
  }, [])

  return (
    <div>
      <Routers></Routers>
    </div>
  )
}

export default App;