import React, { Component } from 'react'
import VditorEditor from '../../../Plugin/VditorEditor/VditorEditor'
import './SettingPage.scss'
import SideBar from './SettingComponents/SideBar'
import SettingRouters from './SettingRouters'

export default class SettingPage extends Component {
  render() {
    return (
      <div id='SettingPage'>
        <div className='SettingBox1'>
          <SideBar props={this.props}></SideBar>
        </div>
        <div className='SettingBox2'>
          <SettingRouters></SettingRouters>
        </div>
      </div>
    )
  }
}
