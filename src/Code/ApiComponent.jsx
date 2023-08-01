import React, { Component } from "react";
import { message } from 'antd';
import { uploadImg, downloadImg } from '../Utils/BaiduClient';


class ApiComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        collapsed: false,

    }
    handleUpload = async (e) => {
        const file = e.target.files[0];
        await uploadImg(file);
        const imgUrl = await downloadImg(file);
        this.setState({
          imgUrl: imgUrl
        }, () => {
          console.log(this.state.imgUrl, '图片地址');
        });
      }
}

export default ApiComponent;