import React, { Component } from 'react'
import { Space, Input, Button, message } from 'antd';
import { EditMaxim, getCurrentUser } from '../../Functions/HomepageFuc'


export default class MaximInput extends Component {
    state = {
        maxim: null
    }
    
    componentDidMount = async () => {
        let userIntroduction = await getCurrentUser()
        this.setState({
            maxim: userIntroduction.maxim
        })
    }

    //#region 编辑格言
    EditMaxim = (value) => {
        this.setState({
            maxim: value
        })
    }
    //#endregion

    //#region 上传格言
    handleMaxim = (value) => {
        EditMaxim(value)
        message.success({
            content: '上传成功',
        });
    }
    //#endregion

    render() {
        return (
            <Space.Compact className='MaximInput' block>
                <Input placeholder='请输入格言' value={this.state.maxim} onChange={(e) => { this.EditMaxim(e.target.value) }} />
                <Button type="primary" onClick={() => { this.handleMaxim(this.state.maxim) }}>提交</Button>
            </Space.Compact>
        )
    }
}
