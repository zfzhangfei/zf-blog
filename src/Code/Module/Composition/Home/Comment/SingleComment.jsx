import { Avatar, Divider, Space } from 'antd'
import React from 'react'
import { useState } from 'react'

export default function SingleComment({ currentComment }) {
    const [commentData, setCommentData] = useState(currentComment)

    return (
        <div>
            {
                commentData.IsLeaf == 0 ?
                    <div className='SingleCommentBox'>
                        {
                            console.log(commentData, 'commentData')
                        }
                        <div style={{ height: "100%", width: 100 }}>
                            <Avatar style={{ marginLeft: 20 }} size={60}
                                src={<img src={commentData.Avatar} alt="avatar" />}
                            />
                        </div>
                        <div style={{ height: "100%", flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ width: '100%', height: 20, fontWeight: 'bold', fontFamily: 'fantasy', fontSize: 14 }}>来自中国的<span style={{ marginLeft: 2, marginRight: 2, color: '#000' }}>{commentData.CreateBy}</span>同学说：</div>
                            <div style={{
                                width: 1000,
                                margin: 10,
                                flex: 1,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                                wordWrap: 'break-word',
                                textIndent: '2em',
                            }}>{commentData.Content}</div>
                            <div style={{ width: '100%', height: 30, fontWeight: 'bold', fontFamily: 'fantasy', fontSize: 12 }}>
                                <Space size={20}>
                                    <span>4个月前</span>
                                    <span>回复</span>
                                </Space>
                            </div>
                        </div>
                    </div> :
                    <div className='LeafCommentLeafBox'>
                        {
                            console.log(commentData, 'xxxxxxxxxxxxx')
                        }
                        <div style={{ height: "100%", width: 100 }}>
                            <Avatar style={{ marginLeft: 20 }} size={60}
                                src={<img src={commentData.Avatar} alt="avatar" />}
                            />
                        </div>
                        <div style={{ height: "100%", flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ width: '100%', height: 20, fontWeight: 'bold', fontFamily: 'fantasy', fontSize: 14 }}>来自中国的<span style={{ marginLeft: 2, marginRight: 2, color: '#000' }}>{commentData.CreateBy}</span>同学说：</div>
                            <div style={{
                                width: 900,
                                margin: 10,
                                flex: 1,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                                wordWrap: 'break-word',
                                textIndent: '2em',
                            }}>{commentData.Content}</div>
                            <div style={{ width: '100%', height: 30, fontWeight: 'bold', fontFamily: 'fantasy', fontSize: 12 }}>
                                <Space size={20}>
                                    <span>12个月前</span>
                                    <span>回复</span>
                                </Space>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}
