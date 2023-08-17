import React, { Component } from 'react'
import TextbusEditor from '../../../../../Plugin/Textbus/TextbusEditor'
import { postArtical } from '../../../Api/Api';
import { Button, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import DemoEditor from '../../../../../Utils/MdEditor';
import MyParagraph from '../../../../CommonComponent/MyParagraph';
import { getArtical } from '../../../Api/Api';

const { Paragraph } = Typography;
export default class ArticalConfig extends Component {

    state = {
        Content: null,
        ParagraphValue: '123',
        artical: [],
        articalContent: null,
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
        // postArtical('111', 1, this.state.Content)
    }


    handleChange = (value, id) => {
        console.log(value, id, 'MyParagraph');
    }

    ChooseArtical = (value) => {
        console.log(value, 'ChooseArtical');
        this.setState({
            articalContent: value.Content
        })
    }


    render() {
        return (
            <div className='SettingsContent'>
                <Button onClick={() => { this.handleArtical() }} block style={{ backgroundColor: 'pink', color: '#333' }}><PlusOutlined /></Button>
                <div>
                    <div style={{ display: 'inline-block', verticalAlign: 'middle', width: '20%', height: 'calc(100vh - 120px)', background: 'gray' }}>
                        <div className='ArticalName'>
                            {
                                this.state.artical.map((item, index) => {
                                    return (
                                        <MyParagraph onChange={this.handleChange} articalItem={item} key={index} onClick={this.ChooseArtical}></MyParagraph>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div style={{ display: 'inline-block', verticalAlign: 'middle', width: '80%', height: 'calc(100vh - 120px)', background: '#333' }}>
                        <div className='ArticalSummary'>

                        </div>
                        <div className='ArticalContent'>
                            {
                                this.state.articalContent ?
                                    <DemoEditor articalContent={this.state.articalContent}></DemoEditor> : ''
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
