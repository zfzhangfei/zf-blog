import React, { Component } from 'react'
import VditorEditor from '../../../Plugin/VditorEditor/VditorEditor'

export default class SettingPage extends Component {
  render() {
    return (
      <div id='SettingPage'>
         <VditorEditor currentArtical={null}></VditorEditor>
      </div>
    )
  }
}
