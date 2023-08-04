import React, { Component } from 'react'
import { Upload } from 'antd';
import {
    LoadingOutlined,
} from '@ant-design/icons';

export default class UploadAvatar extends Component {
    state = {
        imageUrl: 'https://zfblog.su.bcebos.com/zfblogpicture/%E5%9B%BE%E7%89%871.png',
        loading: false
    }
    uploadButton = (
        <div>
            {this.state.loading ? <LoadingOutlined /> : <LoadingOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );

    render() {
        return (
            <div className='uploadAvatar'>
                {/* <Avatar
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                    src={<img src={this.state.userIntroduction.avatar} alt="avatar" />}
                /> */}

                <Upload
                    name="avatar"
                    listType="picture-circle"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                // beforeUpload={beforeUpload}
                // onChange={handleChange}
                >
                    {this.state.imageUrl ? (
                        <img
                            src={this.state.imageUrl}
                            alt="avatar"
                            style={{
                                width: '100%',
                            }}
                        />
                    ) : (
                        this.uploadButton
                    )}
                </Upload>
            </div>
        )
    }
}
