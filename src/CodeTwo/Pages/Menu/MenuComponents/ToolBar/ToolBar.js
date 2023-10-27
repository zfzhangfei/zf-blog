import { SettingFilled, HomeFilled } from '@ant-design/icons'
import React from 'react'
import './ToolBar.scss'

export default function ToolBar({ props }) {

    const GoSetting = () => {
        props.history.push('/Setting')
    }

    return (
        <div id='ToolBar'>
            <SettingFilled style={{ fontSize: 32, color: '#641E16', margin: 5 }} onClick={() => { GoSetting() }} />
            <HomeFilled style={{ fontSize: 32, color: '#641E16', margin: 5 }} />
        </div>
    )
}
