import React from 'react';
import { Space, Table, Tag } from 'antd';
import { connect } from 'react-redux';
const columns = [
    {
        title: '文章名',
        dataIndex: 'Name',
        key: 'Name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: '简介',
        dataIndex: 'Summary',
        key: 'Summary',
        render: (text) => <div style={{
            width: 200,
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            wordWrap: 'break-word',
            overflow: 'hidden',
        }}>{text}</div>,
    },
    {
        title: '标签',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    return (
                        <Tag color={tag.color} key={tag.value}>
                            {tag.value}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: '操作',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const ArticalTable = ({ data }) => <Table columns={columns} dataSource={data} />;

export default ArticalTable