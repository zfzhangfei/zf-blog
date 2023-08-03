import React, { Component } from 'react'
import '../../Css/Settingspage.css'
import '../../Module.css'
import { Button, Modal } from 'antd';
import MyAddTechnologyIcon from '../../../Component/MyAddTechnologyIcon';

export default class SkillIcon extends Component {
    state = {
        isModalOpen: false,
        technologyIcon: null,
        time: null
    }

    componentDidMount = () => {
        this.getBosPicture()
    }

    //#region 获取图片
    getBosPicture = () => {
        this.get('/getBosPicture', { type: 1, username: '' })
            .then(results => {
                // 这里是成功回调
                this.setState({
                    technologyIcon: results.res
                })
            }).catch(err => {
                // 这里是错误回调
                console.log(err)
            })
    }
    //#endregion

    //#region 新增图标的弹窗
    showModel = () => {
        this.setState({
            isModalOpen: true,
        })
    }
    handleOk = () => {
        this.getBosPicture()
        this.setState({
            isModalOpen: false,
        })
    };
    handleCancel = () => {
        this.setState({
            isModalOpen: false,
        })
    };
    //#endregion

    //#region 删除图标的弹窗
    DeleteSkillIcon = (key) => {
        const now = new Date();
        let params = {
            key: key,
            time: now.toLocaleString()
        }
        this.post('/DeleteBosPicture', params)
            .then(results => {
                // 这里是成功回调
                console.log(results)
                this.getBosPicture()
            }).catch(err => {
                // 这里是错误回调
                console.log(err)
            })
    }
    //#endregion

    render() {
        return (
            <div className='SkllIconBox'>
                <div className='SkllIconButton'><Button type='primary' onClick={() => { this.showModel() }}>新增技能图标</Button></div>
                <Modal title="Basic Modal" open={this.state.isModalOpen} onOk={() => { this.handleOk() }} onCancel={() => { this.handleCancel() }}>
                    <MyAddTechnologyIcon></MyAddTechnologyIcon>
                </Modal>
                <div className='SkllIcons'>
                    {
                        this.state.technologyIcon ? this.state.technologyIcon.map((item, index) => {
                            return (
                                <img src={item.BosPath} alt={item.BosName} style={{ width: 30, height: 30, margin: 10 }} key={item.BosName} onClick={() => { this.DeleteSkillIcon(item.Id) }} />
                            )
                        }) : ''
                    }
                </div>
            </div>
        )
    }
}
