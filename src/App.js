import Router from './Code/Router'
import React, { Component } from 'react'
import { post, get } from './Utils/request';


Component.prototype.get = get
Component.prototype.post = post

function App() {
  return (
    <div>
      <Router></Router>
    </div>
  )
}

export default App;