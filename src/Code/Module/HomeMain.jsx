import React, { Component } from 'react'
import { ThemeContext } from '../../Plugin/themeContext';
import {uploadImg,downloadImg} from '../../Utils/BaiduClient';

export default class HomeMain extends Component {
  static contextType = ThemeContext;

  state = {
    imgUrl: null 
  };

  handleUpload = async (e) => {
    const file = e.target.files[0];
    await uploadImg(file);

    const imgUrl = await downloadImg('zfblogpicture/' + file.name);

    this.setState({
      imgUrl: imgUrl
    },()=>{
      console.log(this.state.imgUrl,'图片地址');
    });
  }

  render() {
    const theme = this.context;
    return (
      <div style={{ background: theme.bgColor, width: '100vw', height: '100vh' }}>
        <input type="file" onChange={this.handleUpload} />
        <img key={this.state.imgUrl} src={this.state.imgUrl} width={100} height={100} style={{background:'pink'}}/>
      </div>
    )
  }
}
