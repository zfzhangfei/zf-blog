import React, { Component } from 'react'
import {ThemeContext} from '../../../Plugin/themeContext'
import '../Css/Settingspage.css'
import '../Module.css'
import { Button } from 'antd';

export default class Settingspage extends Component {
    static contextType = ThemeContext;



    render() {
        const theme = this.context;
        return (
            <div id='Main' style={{ background: theme.bgColor, color: theme.textColor, width: '100vw' }}>
                <div id='Settingspage'>
                    <div className='SkllIconBox'>
                        <Button type='primary'>新增技能图标</Button>
                    </div>
                </div>
            </div>
        )
    }
}
