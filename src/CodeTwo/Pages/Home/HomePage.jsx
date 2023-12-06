import React, { Component } from 'react'
import './HomePage.scss'
import 'animate.css'
import CoverTwo from './HomeComponents/CoverTwo/CoverTwo'

export default class HomePage extends Component {

  GoNext = () => {
    this.props.history.push('/Menu')
  }

  render() {
    return (

          <div id='HomePage'>
            <CoverTwo props={this.props}></CoverTwo>
          </div>
          
    )
  }
}
