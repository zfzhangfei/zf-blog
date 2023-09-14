import { Avatar, Button, Popover, Space } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { Component } from 'react'
import emoji from '../../../Static/Image/表情包.png'
import EmojiPicker from './EmojiPicker'

export default class Comment extends Component {
  state = {
    CommentContent: ''
  }


  emojiSelect = (value) => {
    this.setState(prevState => ({
      CommentContent: prevState.CommentContent + value.native
    }));
  }


  PostComment=()=>{
    console.log(this.state.CommentContent,'hsakfhkajfsahdfakjshkfak');
  }



  render() {
    return (
      <div className='Comment'>
        <div className='SubmitComment' style={{ display: 'flex', alignItems: 'top' }}>
          <Avatar style={{ marginRight: 20 }} size={60} />

          <div style={{ flex: 1 }}>
            <div style={{ width: '100%', height: 200, overflow: 'auto' }}>
              <TextArea style={{ width: '100%', resize: 'none', minHeight: 200 }} value={this.state.CommentContent} onChange={(e) => { this.setState({ CommentContent: e.target.value }) }} />
            </div>

            <div style={{ width: '100%', height: 40, position: 'relative'}}>
              <Space size={10} direction='horizontal'>
                <Popover content={
                  <div>
                    <EmojiPicker emojiSelect={this.emojiSelect}></EmojiPicker>
                  </div>
                } title="Title" trigger="hover">
                  <div style={{ display: 'inline-block', verticalAlign: 'middle', height: 40, width: 40 }}>
                    <img src={emoji} alt="表情包" style={{ height: 30, width: 30, margin: 5 }} />
                  </div>
                </Popover>

                <div style={{ display: 'inline-block', verticalAlign: 'middle', height: 40, width: 40 }}>
                  <img src={emoji} alt="表情包" style={{ height: 30, width: 30, margin: 5 }} />
                </div>

                <div style={{ display: 'inline-block', verticalAlign: 'middle', height: 40, width: 40 }}>
                  <img src={emoji} alt="表情包" style={{ height: 30, width: 30, margin: 5 }} />
                </div>
              </Space>

              <div style={{ display: 'inline-block', verticalAlign: 'middle', height: 40, width: 40,position: 'absolute', right: 70, top: 0, }}>
                <Button type='primary' style={{margin:5}} onClick={()=>{this.PostComment()}}>发表评论</Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
