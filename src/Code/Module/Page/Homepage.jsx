import React, { Component } from 'react'
import {
    EditOutlined,
} from '@ant-design/icons';
import {Modal } from 'antd';
import {ThemeContext} from '../../../Plugin/themeContext'
import MyAddTechnologyIcon from '../../Component/MyAddTechnologyIcon';
import '../Css/Homepage.css'
import '../Module.css'

export default class Homepage extends Component {
    static contextType = ThemeContext;
    state = {
        technologyIcon: null,
    }

    componentDidMount = () => {
        this.get('/getBosPicture',{type:1,username:''})
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

    render() {
        const theme = this.context;
        return (
          <div id='Main'style={{ background: theme.bgColor, color: theme.textColor, width: '100vw' }}>
              <div id='Homepage'>
                <div style={{ width: '100%', marginTop: '20px' }}>
                    <div className='Introduction' style={{ background: theme.introductionBgColor }}>
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
                                        <a href={item.Href} target='_blank' key={index} style={{ width: 50, height: 50 }}><img src={item.BosPath} alt={item.BosName} style={{ width: 25, height: 25 }} /></a>
                                    )
                                }) : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
          </div>
        )
    }
}
