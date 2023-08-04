import React, { Component } from 'react'
import '../Css/Settingspage.css'
import '../Module.css'
import { ThemeContext } from '../../../Plugin/themeContext'
import { Space } from 'antd';

import SkillIcon from '../Composition/Settings/SkillIcon'
import MaximInput from '../Composition/Settings/MaximInput'
import UploadAvatar from '../Composition/Settings/UploadAvatar';


export default class Settingspage extends Component {
    static contextType = ThemeContext;

    render() {
        const theme = this.context;
        return (
            <div id='Main' style={{ background: theme.bgColor, color: theme.textColor, width: '100vw' }}>
                <div id='Settingspage'>
                    <Space.Compact block>
                        <UploadAvatar theme={theme}></UploadAvatar>
                    </Space.Compact>
                    <Space.Compact block>
                        <MaximInput theme={theme}></MaximInput>
                    </Space.Compact>
                    <Space.Compact block>
                        <SkillIcon theme={theme}></SkillIcon>
                    </Space.Compact>
                </div>
            </div>
        )
    }
}
