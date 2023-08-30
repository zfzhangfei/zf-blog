import React, { Component } from 'react'
import TextbusEditor from '../../../../../Plugin/Textbus/TextbusEditor'
import { postArtical, getArtical, editArtical } from '../../../Api/Api';
import { Button, Typography, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import DemoEditor from '../../../../../Utils/MdEditor';
import MyParagraph from '../../../../CommonComponent/MyParagraph';
import SelectTags from '../../../../CommonComponent/SelectTags';
import VditorEditor from '../../../../../Utils/VditorEditor';

export default class EditArticle extends Component {

    state = {
        Content: null,
        ParagraphValue: '123',
        artical: [],
        currentArtical: null,
        currentSelectMark: null,
    }

    componentDidMount = async () => {
        this.setState({
            artical: await getArtical(),
            currentArtical: this.props.location.state,
            currentSelectMark: this.props.location.state.Mark
        })


    }

    getContent = (value) => {
        this.setState({
            Content: value
        })

    }


    // handleArtical = () => {
    //     postArtical('新建文章', null, '').then
    //         (async () => {
    //             this.setState({
    //                 artical: await getArtical()
    //             })
    //         })

    // }


    // handleChange = (ArticalName, currentArtical) => {
    //     editArtical(ArticalName, currentArtical.Mark, currentArtical.Content, currentArtical.Id)
    // }

    // ChooseArtical = (editableStr, articalItem) => {
    //     this.setState({
    //         currentArtical: articalItem,
    //     }, async () => {
    //         this.setState({
    //             artical: await getArtical()
    //         })
    //     })
    // }

    getSelectMark = (value) => {
        console.log('====================================');
        console.log(value);
        console.log('====================================');
        this.setState({
            currentSelectMark: value.join('/')
        })
    }

    render() {
        return (
            <div className='SettingsContent'>
                {/* <Button onClick={() => { this.handleArtical() }} block type='primary'><PlusOutlined /></Button> */}
                <div style={{ width: '100%', height: 140 }}>
                    <SelectTags getSelectMark={this.getSelectMark} currentArtical={this.state.currentArtical}></SelectTags>
                    <div className='ArticalSummary'>

                    </div>
                    <div className='ArticalMark'>

                    </div>
                </div>
                <div style={{ display: 'inline-block', verticalAlign: 'top', width: '100%',height:'calc(100vh - 200px)'}}>
                    <div className='ArticalContent'>
                        {
                            this.state.currentArtical ?
                                // <DemoEditor currentArtical={this.state.currentArtical} currentSelectMark={this.state.currentSelectMark}></DemoEditor> : ''
                                <VditorEditor currentArtical={this.state.currentArtical}></VditorEditor>:''
                        }
                    </div>

                </div>
            </div>
        )
    }
}
