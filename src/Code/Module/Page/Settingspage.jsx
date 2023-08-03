import React, { Component } from 'react'
import { ThemeContext } from '../../../Plugin/themeContext'
import '../Css/Settingspage.css'
import '../Module.css'
import SkillIcon from '../Composition/Settings/SkillIcon'

export default class Settingspage extends Component {
    static contextType = ThemeContext;

    render() {
        const theme = this.context;
        return (
            <div id='Main' style={{ background: theme.bgColor, color: theme.textColor, width: '100vw' }}>
                <div id='Settingspage'>
                    <SkillIcon theme={theme}></SkillIcon>
                </div>
            </div>
        )
    }
}
