import React, { Component } from 'react'
import { Avatar, Button, Popover, Space } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import emoji from '../../../Static/Image/表情包.png'
import EmojiPicker from './EmojiPicker'
import { GlobalContext } from '../../../../../Utils/GlobalProvider'
import { postComment } from '../../../../Api/Api'

export default class SubmitComment extends Component {
    state = {
        CommentContent: '',
    }


    emojiSelect = (value) => {
        this.setState(prevState => ({
            CommentContent: prevState.CommentContent + value.native
        }));
    }


    PostComment = async (CurrentUser) => {
        await postComment(
            this.props.ArticleId,
            this.props.replyComment ? this.props.replyComment.Id : 0,
            this.props.replyComment ? this.props.replyComment.CreateBy : '',
            CurrentUser.username,
            this.state.CommentContent,
            this.props.replyComment ? 1 : 0,
            0,
            'https://zfblog.su.bcebos.com/zfblogpicture/u%3D1577303935%2C3801284994%26fm%3D253%26fmt%3Dauto%26app%3D138%26f%3DJPEG.webp'
        )
    }

    render() {
        return (
            <GlobalContext.Consumer>
                {context => (

                    <div className='SubmitComment' style={{ display: 'flex', alignItems: 'top' }}>
                      
                        <Avatar style={{ marginRight: 20 }} size={60}
                            src={<img src={context.state.CurrentUser.avatar} alt="avatar" />}
                        />

                        <div style={{ flex: 1 }}>
                            <div style={{ width: '100%', height: 200, overflow: 'auto' }}>
                                <TextArea style={{ width: '100%', resize: 'none', minHeight: 200 }}
                                    placeholder={this.props.replyComment ? '回复' + this.props.replyComment.CreateBy + ":" : '快来说点什么吧！'}
                                    value={this.state.CommentContent} onChange={(e) => { this.setState({ CommentContent: e.target.value }) }} />
                            </div>

                            <div style={{ width: '100%', height: 40, position: 'relative' }}>
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
                                </Space>
                                <div style={{ display: 'inline-block', verticalAlign: 'middle', height: 40, width: 40, position: 'absolute', right: 70, top: 0, }}>
                                    <Button type='primary' style={{ margin: 5 }} onClick={() => { this.PostComment(context.state.CurrentUser) }}>发表评论</Button>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </GlobalContext.Consumer>

        )
    }
}
