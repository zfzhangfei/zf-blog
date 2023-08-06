import React, { Component } from 'react'
import { uploadImg, downloadImg } from '../../Utils/BaiduClient';
import { postSkillIcon } from '../Module/Api/Api'
import { Input } from 'antd';

export default class MyAddTechnologyIcon extends Component {
    state = {
        imgUrl: null,
        file:null,
        link: null,

    };

    handleUpload = async (e) => {
        const file = e.target.files[0];
        //上传
        await uploadImg(file);
        //下载
        const imgUrl = await downloadImg(file.name);
        this.setState({
            imgUrl: imgUrl,
            file:file
        }, () => {
            this.props.uploadSkillIcon(this.state.imgUrl, this.state.file, this.state.link)
        });
    }

    handleLink = async (e) => {
        this.setState({
            link: e.target.value
        },()=>{
            this.props.uploadSkillIcon(this.state.imgUrl, this.state.file, this.state.link)
        })
    }
    render() {
        return (
            <div>
                <div>
                    <input type="file" onChange={this.handleUpload} style={{ verticalAlign: 'top' }} />
                    <img key={this.state.imgUrl} src={this.state.imgUrl} width={100} height={100} />
                </div>
                <Input placeholder="可链接的地址" onChange={this.handleLink} />
            </div>
        )
    }
}
