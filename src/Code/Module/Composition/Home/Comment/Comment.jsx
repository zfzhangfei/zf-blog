
import React, { Component } from 'react'
import { GlobalContext } from '../../../../../Utils/GlobalProvider'
import ShowComment from './ShowComment'
import { postComment } from '../../../../Api/Api'
import SubmitComment from './SubmitComment'

export default class Comment extends Component {
  state = {
    replyComment: null,
  }



  handleReply = (value) => {
    this.setState({
      replyComment: value,
    })
  }






  render() {
    return (
      <GlobalContext.Consumer>
        {context => (
          <div className='Comment'>
            <div>
              <SubmitComment ArticleId={this.props.ArticleId} replyComment={this.state.replyComment}></SubmitComment>
            </div>
            <div className='CommentTree'>
              <ShowComment ArticleId={this.props.ArticleId} handleReply={this.handleReply}></ShowComment>
            </div>
          </div>
        )}
      </GlobalContext.Consumer>

    )
  }
}
