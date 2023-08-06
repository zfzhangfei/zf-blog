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
            <nav id='Nav' style={{ background: theme.navBgColor, color: theme.textColor, width: '100vw', textAlign: 'center' }}>
                <div className='Menu'>
                    <div className='MenuItem'>
                        <Link to="/" style={{ color: theme.navTextColor, textDecoration: 'none' }}>首页</Link>
                    </div>
                    <div className='MenuItem'>
                        <Link to="/Settings" style={{ color: theme.navTextColor, textDecoration: 'none' }}>配置</Link>
                    </div>
                    <MyChangeThemeBtn changeTheme={this.changeTheme} theme={theme}></MyChangeThemeBtn>
                </div>
            </nav>
        )
    }
}
