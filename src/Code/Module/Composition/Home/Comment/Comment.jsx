import { Avatar, Input, Space } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { Component } from 'react'

export default class Comment extends Component {
  render() {
    return (
      <div className='Comment'>
        <div className='SubmitComment' style={{ display: 'flex'}}>
          <Space direction='horizontal' style={{textAlign:'center'}}>
            <Avatar style={{ marginRight: '20px' }} />
            <TextArea style={{ flex: 1 }} />
          </Space>
        </div>
      </div>
    )
  }
}
