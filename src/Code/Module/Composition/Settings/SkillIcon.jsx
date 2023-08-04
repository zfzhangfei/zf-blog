import React, { Component } from 'react'
import '../../Css/Settingspage.css'
import '../../Module.css'
import { Button, Modal } from 'antd';
import MyAddTechnologyIcon from '../../../Component/MyAddTechnologyIcon';
import { getSkillIcon, deleteSkillIcon } from '../../Functions/HomepageFuc'

export default class SkillIcon extends Component {
    state = {
        isModalOpen: false,
        technologyIcon: null,
        time: null
    }

    componentDidMount = async () => {
        this.setState({
            technologyIcon: await getSkillIcon(),
        })
    }


    //#region 新增图标的弹窗
    showModel = () => {
        this.setState({
            isModalOpen: true,
        })
    }
    handleOk = async () => {
        this.getBosPicture()
        this.setState({
            technologyIcon: await getSkillIcon(),
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
    DeleteSkillIcon = async (key) => {
        deleteSkillIcon(key)
        this.setState({
            technologyIcon: await getSkillIcon(),
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
