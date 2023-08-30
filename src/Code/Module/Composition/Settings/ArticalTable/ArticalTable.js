import React from 'react';
import { Space, Table, Tag } from 'antd';
import { connect } from 'react-redux';
import EditArticle from './EditArticle';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


const ArticalTable = ({ data ,history}) => {
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
                    <a onClick={() => showEditPage(record)}>编辑</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    const showEditPage = (record) => {
      // 将record传递给编辑页面
      history.push('/Settings/ArticalConfig/Edit/'+record.Id, record) 
    }
  
    
    return (
        history.location.pathname.indexOf("Settings/ArticalConfig/Edit") != -1 ? (
            <Router>
                <Switch>
                    <Route path="/Settings/ArticalConfig/Edit/:Id" component={EditArticle} />
                </Switch>
            </Router>
        ) : (
            <Table columns={columns} dataSource={data} />
        )
    );
  };
  

export default ArticalTable