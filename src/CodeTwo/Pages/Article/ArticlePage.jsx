import React, { Component } from 'react'
import './ArticlePage.scss'
import PrivateGarden from './PrivateGarden/PrivateGarden'




export default class ArticlePage extends Component {


  render() {
    return (
      <div id='ArticlePage'>
        {
          this.props.location.state&&this.props.location.state.type=="PrivateGarden"&&<PrivateGarden></PrivateGarden>
        }
      </div>
    )
  }
}