import React from 'react';
import { Avatar, Divider, Space } from 'antd'



const TreeNode = ({ node, onReply }) => {
    const handleReply = () => {
        onReply(node);
    }
    return (
        <div style={{ width: '100%' }}>
            {
                node.IsLeaf == 0 ?
                    <div className='SingleCommentBox'>
                        <div style={{ height: "100%", width: 100 }}>
                            <Avatar style={{ marginRight: 20 }} size={60}
                                src={<img src={node.Avatar} alt="avatar" />}
                            />
                        </div>
                        <div style={{ height: "100%", flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ width: '100%', height: 20, fontWeight: 'bold', fontFamily: 'fantasy', fontSize: 14 }}>来自中国的<span style={{ marginLeft: 2, marginRight: 2, color: '#000' }}>{node.ParentsName}</span>同学说：</div>
                            <div style={{
                                width: "100%",
                                lineHeight: 2,
                                margin: 10,
                                flex: 1,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                                wordWrap: 'break-word',
                                textIndent: '2em',
                            }}>{node.Content}</div>
                            <div style={{ width: '100%', height: 30, fontWeight: 'bold', fontFamily: 'fantasy', fontSize: 12 }}>
                                <Space size={20}>
                                    <span>4个月前</span>
                                    <span onClick={() => { handleReply(node) }}>回复</span>
                                </Space>
                            </div>
                        </div>
                    </div> :
                    <div className='LeafCommentLeafBox'>
                        <div style={{ height: "100%", width: 100 }}>
                            <Avatar style={{ marginRight: 20 }} size={60}
                                src={<img src={node.Avatar} alt="avatar" />}
                            />
                        </div>
                        <div style={{ height: "100%", flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ width: '100%', height: 20, fontWeight: 'bold', fontFamily: 'fantasy', fontSize: 14 }}>
                                来自中国的<span style={{ marginLeft: 2, marginRight: 2, color: '#000' }}>{node.ParentsName}</span>同学回复
                                <span style={{ marginLeft: 2, marginRight: 2, color: '#000' }}>{node.ParentsName}</span>说：</div>
                            <div style={{
                                width: "90%",
                                margin: 10,
                                lineHeight: 2,
                                flex: 1,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                                wordWrap: 'break-word',
                                textIndent: '2em',
                            }}>{node.Content}</div>
                            <div style={{ width: '100%', height: 30, fontWeight: 'bold', fontFamily: 'fantasy', fontSize: 12 }}>
                                <Space size={20}>
                                    <span>12个月前</span>
                                    <span onClick={() => { handleReply(node) }}>回复</span>
                                </Space>
                            </div>
                        </div>
                    </div>
            }
            {node.children && node.children.length > 0 && (
                <ul>
                    {node.children.map(childNode => (
                        <TreeNode key={childNode.Id} node={childNode} onReply={onReply} />
                    ))}
                </ul>
            )}
        </div>
    )
};





const Tree = ({ data, receiveReply }) => {

    const handleReply = (value) => {
        receiveReply(value)
    }

    return (
        <div>
            {data.map(node => (
                <TreeNode key={node.Id} node={node} onReply={handleReply} />
            ))}
        </div>
    )
}


export default Tree;