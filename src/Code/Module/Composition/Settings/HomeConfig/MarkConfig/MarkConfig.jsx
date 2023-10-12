import { Button, Tag, message } from 'antd'
import React, { Component } from 'react'
import AddMarkModel from './AddMarkModel'
import { getMark, deleteMark } from '../../../../../Api/Api'
import { CloseCircleOutlined } from '@ant-design/icons'

export default class MarkConfig extends Component {
    state = {
        markList: null
    }

    componentDidMount = async () => {
        this.setState({
            markList: await getMark()
        })
    }

    preventDefault = async (value) => {
        let result = await deleteMark(value.Id)
        if (result.changedRows > 0) {
            message.success("删除成功！");
        } else {
            message.error('删除失败！');
        }
    }

    render() {
        return (
            <div id='MarkConfig'>
                <AddMarkModel></AddMarkModel>
                <div className='MarkList'>
                    {
                        this.state.markList ? this.state.markList.map((item, index) => {
                            return (
                                <Tag key={item.Id} color={item.Color} closable={true} closeIcon={<CloseCircleOutlined />} onClose={() => { this.preventDefault(item) }}>{item.Value}</Tag>
                            )
                        }) : ''

                    }
                </div>
            </div>
        )
    }
}
