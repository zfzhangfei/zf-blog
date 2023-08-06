import React, { Component } from 'react'
import '../../../Css/Settingspage.css'
import { Button, Modal } from 'antd';
import MyAddTechnologyIcon from '../../../../Component/MyAddTechnologyIcon';
import { getSkillIcon, deleteSkillIcon, postSkillIcon } from '../../../Api/Api'

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

    //#region 上传图标，给父组件传值
    uploadSkillIcon = async (imgUrl, file, link) => {
        if (imgUrl && file && link) {
            this.setState({
                imgUrl: imgUrl,
                file: file,
                link: link,
            }, () => {
                postSkillIcon(this.state.imgUrl, this.state.file, this.state.link)
            })
        }
    }
    //#endregion

    render() {
        return (
            <div className='SkllIconBox'>
                <div className='SkllIconButton'><Button type='primary' onClick={() => { this.showModel() }}>新增技能图标</Button></div>
                <Modal title="上传图标" open={this.state.isModalOpen} onOk={() => { this.handleOk() }} onCancel={() => { this.handleCancel() }}>
                    <MyAddTechnologyIcon uploadSkillIcon={this.uploadSkillIcon}></MyAddTechnologyIcon>
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
