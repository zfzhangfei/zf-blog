import React, { Component } from 'react'
import {ThemeContext} from '../../../Plugin/themeContext'
import '../Css/Settingspage.css'
import '../Module.css'

export default class muban extends Component {
    static contextType = ThemeContext;

  render() {
    const theme = this.context;
    return (
        <div id='Main' style={{ background: theme.bgColor, color: theme.textColor, width: '100vw' }}>
            <div id='muban'>
                111
            </div>
        </div>
    )
  }
}
