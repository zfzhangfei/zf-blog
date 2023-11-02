import React, { Component } from 'react'
import './ArticlePage.scss'
import PrivateGarden from './PrivateGarden/PrivateGarden'
import Works from './Works/Works'




export default class ArticlePage extends Component {


  render() {
    return (
      <div id='ArticlePage'>
        {
          this.props.location.state&&this.props.location.state.type=="PrivateGarden"&&<PrivateGarden></PrivateGarden>
        }
          {
          this.props.location.state&&this.props.location.state.type=="Artwork"&&<Works pagename={this.props.location.state.pagename}></Works>
        }
      </div>
    )
  }
}