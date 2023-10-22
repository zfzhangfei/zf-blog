import React, { Component } from 'react'
import './HomePage.scss'
import CoverOne from './HomeComponents/CoverOne'

export default class HomePage extends Component {
  render() {
    return (
      <div id='HomePage'>
        <CoverOne></CoverOne>
      </div>
    )
  }
}
