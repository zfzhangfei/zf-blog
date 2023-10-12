import React, { Component } from 'react'
import { Space } from 'antd';
import '../../../../Css/Settingspage.scss'
import UploadAvatar from './UploadAvatar'
import { getCurrentUser } from '../../../../../Api/Api';

export default class IntroductionConfig extends Component {
    state = {
        currentuser: null
    }

    componentDidMount = async () => {
        let user = await getCurrentUser()
        this.setState({
            currentuser: user
        })
    }




    render() {
        return (
            <div id='IntroductionConfig'>
                <Space.Compact block>
                    <UploadAvatar ></UploadAvatar>
                </Space.Compact>
                <h1 style={{ textAlign: 'center' }}>
                    {this.state.currentuser?.username}
                </h1>
            </div>
        )
    }
}
