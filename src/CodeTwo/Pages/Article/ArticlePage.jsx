import React, { Component } from 'react'
import './ArticlePage.scss'
import PrivateGarden from './PrivateGarden/PrivateGarden'




export default class ArticlePage extends Component {


  render() {
    return (
      <div id='ArticlePage'>
        {
          console.log(this.props.state.state, 'ddddddddd')
        }
        {
          <PrivateGarden></PrivateGarden>
        }
      </div>
    )
  }
}
