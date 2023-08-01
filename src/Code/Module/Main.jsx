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

  render() {
    const theme = this.context;
    return (
      <div id='Main' style={{ background: theme.bgColor, color: theme.textColor, width: '100vw', height: '100vh' }}>
        <MyChangeThemeBtn changeTheme={this.changeTheme}></MyChangeThemeBtn>
        <div id='Homepage'>
          <div className='Introduction'>
            <div className='Avatar'>
              <img scr=''></img>
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
    )
  }
}
