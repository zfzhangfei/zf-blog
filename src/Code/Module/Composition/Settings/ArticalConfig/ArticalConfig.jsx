import React, { Component } from 'react'
import TextbusEditor from '../../../../../Plugin/Textbus/TextbusEditor'
import { postArtical } from '../../../Api/Api';
import { Button, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import DemoEditor from '../../../../../Utils/MdEditor';
import MyParagraph from '../../../../CommonComponent/MyParagraph';

const { Paragraph } = Typography;
export default class ArticalConfig extends Component {

    state = {
        Content: null,
        ParagraphValue: '123',
        artical: [
            {
                Id: 5,
                Name: '123',
                Mark: 1,
                Summary: '34434',
                Content: "vvvv",
                Author: 'admin'
            },
            {
                Id: 6,
                Name: '6544',
                Mark: 1,
                Summary: '34434',
                Content: "asda",
                Author: 'admin'
            },
        ]
    }

    getContent = (value) => {
        this.setState({
            Content: value
        })

    }


    handleArtical = () => {
        // postArtical('111', 1, this.state.Content)
    }


    handleChange = (value,id) => {
        console.log(value, id,'MyParagraph');
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
                                        <MyParagraph onChange={this.handleChange} articalId={item.Id}></MyParagraph>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div style={{ display: 'inline-block', verticalAlign: 'middle', width: '80%', height: 'calc(100vh - 120px)', background: '#333' }}>
                        <div className='ArticalSummary'>

                        </div>
                        <div className='ArticalContent'>
                            {/* <DemoEditor></DemoEditor> */}
                        </div>
                        <div className='ArticalMark'>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
