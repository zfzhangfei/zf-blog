import React, { Component } from 'react'
import {
    EditOutlined,
} from '@ant-design/icons';
import {Modal } from 'antd';
import MyAddTechnologyIcon from '../../Component/MyAddTechnologyIcon';
import css from '../../../Image/css.png'
import HTML5 from '../../../Image/HTML5.png'


export default class Homepage extends Component {
    state = {
        theme: this.props.theme,

        technologyIcon: null,
        isModalOpen:false,
    }

    componentDidMount = () => {
        const data = [
            {
                href: "https://www.w3school.com.cn/css/index.asp",
                src: 'http://zfblog.su.bcebos.com/zfblogpicture/css.png',
                alt: 'css.png',
            },
            {
                href: "https://www.w3school.com.cn/css/index.asp",
                src: 'https://zfblog.su.bcebos.com/zfblogpicture/css.png',
                alt: 'css.png',
            },
            {
                href: "https://www.w3school.com.cn/css/index.asp",
                src: 'https://zfblog.su.bcebos.com/zfblogpicture/css.png',
                alt: 'css.png',
            },
        ]
        this.setState({
            technologyIcon: data
        })
    }

    showModel = () => {
        this.setState({
            isModalOpen:true,
        })
    }
    handleOk = () => {
        this.setState({
            isModalOpen:false,
        })
    };
    handleCancel = () => {
        this.setState({
            isModalOpen:false,
        })
    };


    render() {
        return (
            <div id='Homepage'>
                <div style={{ width: '100%', marginTop: '20px' }}>
                    <div className='Introduction' style={{ background: this.state.theme.introductionBgColor }}>
                        <div className='Avatar'>
                            <img src="https://zfblog.su.bcebos.com/zfblogpicture/%E5%9B%BE%E7%89%871.png" alt="describe image"></img>
                        </div>
                        <div className='Quote'>
                            <p>有志者事竟成</p>
                            <h1>zhangfei</h1>
                        </div>
                        <div className='technologyIcon'>
                            {
                                this.state.technologyIcon ? this.state.technologyIcon.map((item, index) => {
                                    return (
                                        <a href={item.href} target='_blank' key={index} style={{ width: 50, height: 50 }}><img src={item.src} alt={item.alt} style={{ width: 25, height: 25 }} /></a>
                                    )
                                }) : ''
                            }
                            <EditOutlined className='EditOutlined' onClick={() => { this.showModel() }} />
                            <Modal title="Basic Modal" open={this.state.isModalOpen} onOk={()=>{this.handleOk()}} onCancel={()=>{this.handleCancel()}}>
                                <MyAddTechnologyIcon></MyAddTechnologyIcon>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
