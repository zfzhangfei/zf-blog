import React, { Component } from 'react'
import { ThemeContext } from '../../Plugin/themeContext';
import ApiComponent from '../ApiComponent';
import Homepage from './Page/Homepage';
import './Module.css'


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
      <div id='Main' style={{ background: theme.bgColor, color: theme.textColor, width: '100vw' }}>
        <Homepage
          theme={theme}>
        </Homepage>
      </div>
    )
  }
}
