import React, { Component } from 'react'
import { Space } from 'antd';
import '../../../../Css/Settingspage.css'
import UploadAvatar from './UploadAvatar'
import MaximInput from './MaximInput'
import SkillIcon from './SkillIcon'

export default class IntroductionConfig extends Component {

    // componentDidMount=()=>{
    //     this.props.sentIndexToSiderBar(0)
    // }


    render() {
        return (
            <div>
                 <div className='IntroductionConfig'>
                <Space.Compact block>
                    <UploadAvatar ></UploadAvatar>
                </Space.Compact>
                <Space.Compact block>
                    <MaximInput ></MaximInput>
                </Space.Compact>
                <Space.Compact block>
                    <SkillIcon ></SkillIcon>
                </Space.Compact>
                </div>
            </div>
        )
    }
}
