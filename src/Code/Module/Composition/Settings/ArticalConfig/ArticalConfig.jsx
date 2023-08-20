import React, { Component } from 'react'
import TextbusEditor from '../../../../../Plugin/Textbus/TextbusEditor'
import { postArtical, getArtical, editArtical } from '../../../Api/Api';
import { Button, Typography, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import DemoEditor from '../../../../../Utils/MdEditor';
import MyParagraph from '../../../../CommonComponent/MyParagraph';
import SelectTags from '../../../../CommonComponent/SelectTags';

const { Paragraph } = Typography;
export default class ArticalConfig extends Component {

    state = {
        Content: null,
        ParagraphValue: '123',
        artical: [],
        currentArtical: null,
        currentSelectMark: null,
    }

    componentDidMount = async () => {
        this.setState({
            artical: await getArtical()
        })
    }

    getContent = (value) => {
        this.setState({
            Content: value
        })

    }


    handleArtical = () => {
        postArtical('新建文章', null, '').then
            (async () => {
                this.setState({
                    artical: await getArtical()
                })
            })

    }


    handleChange = (ArticalName, currentArtical) => {
        editArtical(ArticalName, currentArtical.Mark, currentArtical.Content, currentArtical.Id)
    }

    ChooseArtical = (editableStr, articalItem) => {
        this.setState({
            currentArtical: articalItem,
        }, async () => {
            this.setState({
                artical: await getArtical()
            })
        })
    }

    getSelectMark = (value) => {
        this.setState({
            currentSelectMark: value.join('/')
        })
    }

    render() {
        return (
            <div className='SettingsContent'>
                <Button onClick={() => { this.handleArtical() }} block type='primary'><PlusOutlined /></Button>
                <SelectTags getSelectMark={this.getSelectMark} currentArtical={this.state.currentArtical}></SelectTags>
                <div>
                    <div style={{ display: 'inline-block', verticalAlign: 'top', width: '20%' }}>
                        <div className='ArticalName'>
                            {
                                this.state.artical.map((item, index) => {
                                    return (
                                        <MyParagraph onChange={this.handleChange} articalItem={item} onClick={this.ChooseArtical} key={index}></MyParagraph>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div style={{ display: 'inline-block', verticalAlign: 'top', width: '80%' }}>
                        <div className='ArticalSummary'>

                        </div>
                        <div className='ArticalContent'>
                            {
                                this.state.currentArtical ?
                                    <DemoEditor currentArtical={this.state.currentArtical} currentSelectMark={this.state.currentSelectMark}></DemoEditor> : ''
                            }
                        </div>
                        <div className='ArticalMark'>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
