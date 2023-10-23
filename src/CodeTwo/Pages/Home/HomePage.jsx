import React, { Component } from 'react'
import './HomePage.scss'
import CoverOne from './HomeComponents/CoverOne'

export default class HomePage extends Component {


  render() {
    return (
      <div id='HomePage'>
        <CoverOne props={this.props}></CoverOne>
      </div>
    )
  }
}
