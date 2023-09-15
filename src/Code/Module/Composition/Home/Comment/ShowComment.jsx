import React, { Component } from 'react'
import { getComment } from '../../../../Api/Api'
import SingleComment from './SingleComment'

export default class ShowComment extends Component {
    state = {
        currentComment: null
    }

    componentDidMount = async () => {
        this.setState({
            currentComment: await getComment()
        })
    }

    render() {
        return (
            <div className='ShowCommentList'>
                {this.state.currentComment && <SingleComment currentComment={this.state.currentComment}></SingleComment>}
            </div>
        )
    }
}
