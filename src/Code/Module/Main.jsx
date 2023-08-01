import React, { Component } from 'react'
import { ThemeContext } from '../../Plugin/themeContext';
import MyChangeThemeBtn from '../Component/MyChangeThemeBtn'
import Homepage from './Page/Homepage'
import ApiComponent from '../ApiComponent';


export default class HomeMain extends ApiComponent {
  static contextType = ThemeContext;

  state = {
    imgUrl: null,
  };

  changeTheme = (value) => {
    this.props.changeTheme(value)
  }
  // theme.introductionBgColor
  render() {
    const theme = this.context;
    return (
      <div id='Main' style={{ background: theme.bgColor, color: theme.textColor, width: '100vw', height: '100vh' }}>
        <MyChangeThemeBtn changeTheme={this.changeTheme}></MyChangeThemeBtn>
        <div id='Homepage'>
          <div style={{width:'100%',marginTop:'20px'}}>
            <div className='Introduction' style={{ background: 'url(https://zfblog.su.bcebos.com/zfblogpicture/Plantainleaf.jpg)' }}>
              <div className='Avatar'>
                <img src="https://zfblog.su.bcebos.com/zfblogpicture/%E5%9B%BE%E7%89%871.png" alt="describe image"></img>
              </div>
              <div className='Quote'>
                <p>有志者事竟成</p>
                <h1>zhangfei</h1>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
