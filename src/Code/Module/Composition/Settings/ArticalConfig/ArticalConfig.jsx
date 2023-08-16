import React, { Component } from 'react'
import TextbusEditor from '../../../../../Plugin/Textbus/TextbusEditor'
import { postArtical } from '../../../Api/Api';
import { Button, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import DemoEditor from '../../../../../Utils/MdEditor';
import MyParagraph from '../../../../CommonComponent/MyParagraph';
import { getArtical,editArtical } from '../../../Api/Api';

const { Paragraph } = Typography;
export default class ArticalConfig extends Component {

    state = {
        Content: null,
        ParagraphValue: '123',
        artical: [],
        CurrentArtical: null,
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


    handleChange = (ArticalName, CurrentArtical) => {
        editArtical(ArticalName, CurrentArtical.Mark, CurrentArtical.Content,CurrentArtical.Id)
    }

    ChooseArtical = (editableStr,articalItem) => {
        this.setState({
            CurrentArtical: articalItem,
        })
    }

    render() {
        return (
            <div className='SettingsContent'>
                <Button onClick={() => { this.handleArtical() }} block style={{ backgroundColor: 'pink', color: '#333' }}><PlusOutlined /></Button>
                <div>
                    <div style={{ display: 'inline-block', verticalAlign: 'middle', width: '20%', height: 'calc(100vh - 112px)', background: 'gray' }}>
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
                    <div style={{ display: 'inline-block', verticalAlign: 'middle', width: '80%', height: 'calc(100vh - 112px)', background: '#333' }}>
                        <div className='ArticalSummary'>

                        </div>
                        <div className='ArticalContent'>
                            {
                                this.state.CurrentArtical ?
                                    <DemoEditor CurrentArtical={this.state.CurrentArtical}></DemoEditor> : ''
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
