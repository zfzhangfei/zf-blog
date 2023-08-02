import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MyChangeThemeBtn from './MyChangeThemeBtn'
import { ThemeContext } from '../../Plugin/themeContext';
import './Componet.css'

export default class MyNav extends Component {
    static contextType = ThemeContext;
    changeTheme = (value) => {
        this.props.changeTheme(value)
      }
    render() {
        const theme = this.context;
        return (
                <nav id='Nav' style={{ background: theme.navBgColor, color: theme.textColor, width: '100vw'}}>
                    <MyChangeThemeBtn changeTheme={this.changeTheme}></MyChangeThemeBtn>
               <div>111</div>
                </nav>
        )
    }
}
