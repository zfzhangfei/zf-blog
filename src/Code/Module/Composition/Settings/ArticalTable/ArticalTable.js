import React, { useState, useEffect } from 'react';
import { Space, Table, Tag } from 'antd';
import { connect } from 'react-redux';
import EditArticle from './EditArticle';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { postArtical, getArtical } from '../../../Api/Api';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


const ArticalTable = ({ data, history }) => {
    const [dataSource, setdataSource] = useState(data)
    useEffect(() => {
        setdataSource(data);
    }, [data]);


    const columns = [
        {
            title: '文章名',
            dataIndex: 'Name',
            key: 'Name',
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
                    {tags ? tags.map((tag) => {
                        return (
                            <Tag color={tag.color} key={tag.value}>
                                {tag.value}
                            </Tag>
                        );
                    }) : ''}
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
        history.push('/Settings/ArticalConfig/Edit/' + record.Id, record)
    }


    const handleArtical = async () => {
        await postArtical('新建文章', null, '', 'https://zfblog.su.bcebos.com/zfblogpicture/%E5%85%83%E6%B0%94%E6%BB%A1%E6%BB%A1.webp');
        const newArtical = await getArtical();
        setdataSource(newArtical);
    }


    return (
        history.location.pathname.indexOf("Settings/ArticalConfig/Edit") != -1 ? (
            <Router>
                <Switch>
                    <Route path="/Settings/ArticalConfig/Edit/:Id" component={EditArticle} />
                </Switch>
            </Router>
        ) : (
            <div>
                <Button onClick={() => { handleArtical() }} block type='primary'><PlusOutlined /></Button>
                <Table columns={columns} dataSource={dataSource}
                    scroll={{
                        y: 'calc(100vh - 211px)',
                    }} />
            </div>
        )
    );
};


export default ArticalTable