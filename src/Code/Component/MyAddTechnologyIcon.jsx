import React, { Component } from 'react'
import { uploadImg, downloadImg } from '../../Utils/BaiduClient';

export default class MyAddTechnologyIcon extends Component {
    state = {
        imgUrl: null
    };

    handleUpload = async (e) => {
        const file = e.target.files[0];
        //上传
        await uploadImg(file);
        //下载
        const imgUrl = await downloadImg(file.name);
        this.setState({
            imgUrl: imgUrl
        }, () => {
            console.log(this.state.imgUrl, '图片地址');
            let params = {
                BosPath: imgUrl,
                BosName: file.name,
                PictureType:1,
                Href:'https://www.w3school.com.cn/css/index.asp'
            }
            this.post('/putBosPicture', params)
                .then(res => {
                    // 这里是成功回调
                    console.log(res);
                }).catch(err => {
                    // 这里是错误回调
                    console.log(err)
                })
        });
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.handleUpload} />
                <img key={this.state.imgUrl} src={this.state.imgUrl} width={100} height={100} style={{ background: 'pink' }} />
            </div>
        )
    }
}
