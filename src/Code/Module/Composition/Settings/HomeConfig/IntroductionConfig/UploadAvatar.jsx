import React, { Component } from 'react'
import { Upload, Avatar, Image } from 'antd';
import {
    PlusOutlined,
} from '@ant-design/icons';
import { uploadImg, downloadImg } from '../../../../../../Utils/BaiduClient';
import { editAvatar, getCurrentUser,login } from '../../../../../Api/Api'


export default class UploadAvatar extends Component {

    state = {
        imageUrl: null
    };

    componentDidMount = async () => {
        login()
        let currentuser = await getCurrentUser()
        this.setState({
            imageUrl: currentuser.avatar
        })
    }

    handleChange = async (info) => {
        await uploadImg(info.file.originFileObj);
        const imageUrl = await downloadImg(info.file.originFileObj.name)
        this.setState({
            imageUrl: imageUrl
        })
        editAvatar(imageUrl)
    }

    render() {

        const uploadButton = (
            <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                icon={<PlusOutlined />}
            />
        );

        return (
            <div className='UploadAvatar'>
                <Upload
                    className='UploadBox'
                    showUploadList={false}
                    onChange={this.handleChange}
                >
                    {this.state.imageUrl ?
                        <Avatar
                            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                            src={<img src={this.state.imageUrl} alt="avatar" />}
                        /> : uploadButton}
                </Upload>
            </div>
        );
    }

}