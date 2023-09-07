import React, { Component } from 'react'
import { postArtical, getArtical, editArtical } from '../../../Api/Api';
import { Button, Typography, Select, message, Input, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import DemoEditor from '../../../../../Utils/MdEditor';
import MyParagraph from '../../../../CommonComponent/MyParagraph';
import SelectTags from '../../../../CommonComponent/SelectTags';
import VditorEditor from '../../../../../Utils/VditorEditor';
import dayjs from 'dayjs';

export default class EditArticle extends Component {

    state = {
        Content: null,
        ParagraphValue: '123',
        artical: [],
        currentArtical: null,
        Summary: null,
        ArticalName: null,
        // currentSelectMark: null,
    }

    componentDidMount = async () => {
        this.setState({
            artical: await getArtical(),
            currentArtical: this.props.location.state,
            Summary: this.props.location.state.Summary,
            ArticalName: this.props.location.state.Name,
            // currentSelectMark: this.props.location.state.Mark
        })


    }

    getContent = (value) => {
        this.setState({
            Content: value
        })

    }

    getSelectMark = (value) => {
        this.setState(prevState => {
            return {
                ...prevState,
                currentArtical: {
                    ...prevState.currentArtical,
                    Mark: value.join('/')
                }
            }
        });
    }

    saveArticle = (articleContent) => {
        this.setState(prevState => {
            return {
                ...prevState,
                currentArtical: {
                    ...prevState.currentArtical,
                    Content: articleContent,
                }
            }
        });
    }

    handleEditorSave() {
        const time = dayjs().format('HH:mm:ss');
        editArtical(this.state.currentArtical.Name, this.state.currentArtical.Mark, this.state.currentArtical.Content, this.state.currentArtical.Summary, this.state.currentArtical.Id).then(() => {
            message.success('保存成功！' + time);
        }).catch(() => {
            message.error('保存失败！' + time);

        })
    }

    handleSummary = (value) => {
        this.setState({
            Summary: value
        })
        this.setState(prevState => {
            return {
                ...prevState,
                currentArtical: {
                    ...prevState.currentArtical,
                    Summary: value,
                }
            }
        });
    }

    handleArticalName = (value) => {
        this.setState({
            ArticalName: value
        })
        this.setState(prevState => {
            return {
                ...prevState,
                currentArtical: {
                    ...prevState.currentArtical,
                    Name: value,
                }
            }
        });
    }

    render() {
        return (
            <div className='SettingsContent'>

                <div style={{ width: '100%', height: 140 }}>
                    <Space >
                        <div className='ArticalName'>
                            <Space>
                                <label >文章名:    </label>
                                <Input value={this.state.ArticalName ? this.state.ArticalName : ''} onChange={(e) => { this.handleArticalName(e.target.value) }} style={{ width: 500 }}></Input>
                            </Space>
                        </div>
                        <div className='ArticalSummary'>
                            <Space>
                                <label >文章简介:    </label>
                                <Input value={this.state.Summary ? this.state.Summary : ''} onChange={(e) => { this.handleSummary(e.target.value) }} style={{ width: 500 }}></Input>
                            </Space>
                        </div>
                    </Space>
                    <div className='ArticalMark'>
                        <SelectTags getSelectMark={this.getSelectMark} currentArtical={this.state.currentArtical}></SelectTags>
                    </div>
                    <Button onClick={() => { this.handleEditorSave() }} block type='primary'>保存</Button>
                </div>
                <div style={{ display: 'inline-block', verticalAlign: 'top', width: '100%', height: 'calc(100vh - 200px)' }}>
                    <div className='ArticalContent'>
                        {
                            this.state.currentArtical ?
                                // <DemoEditor currentArtical={this.state.currentArtical} currentSelectMark={this.state.currentSelectMark}></DemoEditor> : ''
                                <VditorEditor currentArtical={this.state.currentArtical} saveArticle={this.saveArticle}></VditorEditor> : ''
                        }
                    </div>

                </div>
            </div>
        )
    }
}
