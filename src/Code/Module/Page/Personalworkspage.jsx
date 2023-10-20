import React, { Component } from 'react'
import { ThemeContext } from '../../../Utils/Theme/themeContext';
import '../Css/Personalworkspage.css'
import WorkBox from '../Composition/PersonalWorks/WorkBox';


export default class Personalworkspage extends Component {
    static contextType = ThemeContext;
    state = {
        WorkBoxMessage: [
            {
                id: 1,
                backgroundImg: 'https://zfblog.su.bcebos.com/zfblogpicture/%E4%BD%9C%E5%93%81%E8%83%8C%E6%99%AF.webp',
                title: '下雨的云',
            },
            {
                id: 2,
                backgroundImg: 'https://zfblog.su.bcebos.com/zfblogpicture/%E4%BD%9C%E5%93%81%E8%83%8C%E6%99%AF.webp',
                title: '111',
            },
            {
                id: 3,
                backgroundImg: 'https://zfblog.su.bcebos.com/zfblogpicture/%E4%BD%9C%E5%93%81%E8%83%8C%E6%99%AF.webp',
                title: '222',
            },
            {
                id: 4,
                backgroundImg: 'https://zfblog.su.bcebos.com/zfblogpicture/%E4%BD%9C%E5%93%81%E8%83%8C%E6%99%AF.webp',
                title: '333',
            },
            {
                id: 5,
                backgroundImg: 'https://zfblog.su.bcebos.com/zfblogpicture/%E4%BD%9C%E5%93%81%E8%83%8C%E6%99%AF.webp',
                title: '444',
            },
            {
                id: 6,
                backgroundImg: 'https://zfblog.su.bcebos.com/zfblogpicture/%E4%BD%9C%E5%93%81%E8%83%8C%E6%99%AF.webp',
                title: '555',
            },
            {
                id: 6,
                backgroundImg: 'https://zfblog.su.bcebos.com/zfblogpicture/%E4%BD%9C%E5%93%81%E8%83%8C%E6%99%AF.webp',
                title: '555',
            },
            {
                id: 6,
                backgroundImg: 'https://zfblog.su.bcebos.com/zfblogpicture/%E4%BD%9C%E5%93%81%E8%83%8C%E6%99%AF.webp',
                title: '555',
            },
            {
                id: 6,
                backgroundImg: 'https://zfblog.su.bcebos.com/zfblogpicture/%E4%BD%9C%E5%93%81%E8%83%8C%E6%99%AF.webp',
                title: '555',
            },
        ]
    }

    componentDidMount = async () => {

    }

    render() {
        const theme = this.context;
        return (
            <div id='Main' style={{ background: theme.bgColor, color: theme.textColor}}>
                <div id='content'>
                    <div id='Personalworkspage'>
                        <div className="container">
                            {
                                this.state.WorkBoxMessage.map((item, index) => {
                                    return (
                                        <div className='WorkBlock'>
                                            <WorkBox WorkBoxContent={item}></WorkBox>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
