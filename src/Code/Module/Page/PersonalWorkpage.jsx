import React, { Component } from 'react'
import { ThemeContext } from '../../../Utils/Theme/themeContext';
import '../Css/PersonalWorkpage.css'
import WorkBlock from '../Composition/PersonalWorks/WorkBlock/WorkBlock';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import WorkRain from '../Composition/PersonalWorks/Works/WorkRain/WorkRain';

export default class PersonalWorkpage extends Component {
    static contextType = ThemeContext;
    state = {
        works: [
            {
                Id: 1,
                Background: "https://zfblog.su.bcebos.com/zfblogpicture/%E4%BD%9C%E5%93%81%E8%83%8C%E6%99%AF.webp",
                CoverBackground:"https://zfblog.su.bcebos.com/zfblogpicture/%E8%83%8C%E6%99%AF.jpg",
                Name: "下雨的云",
                URL: 'www.baidu.com',
            },
            {
                Id: 2,
                Background: "https://zfblog.su.bcebos.com/zfblogpicture/%E4%BD%9C%E5%93%81%E8%83%8C%E6%99%AF.webp",
                CoverBackground:"https://zfblog.su.bcebos.com/zfblogpicture/%E8%83%8C%E6%99%AF.jpg",
                Name: "222",
                URL: 'www.baidu.com',
            },
            {
                Id: 3,
                Background: "https://zfblog.su.bcebos.com/zfblogpicture/%E4%BD%9C%E5%93%81%E8%83%8C%E6%99%AF.webp",
                CoverBackground:"https://zfblog.su.bcebos.com/zfblogpicture/%E8%83%8C%E6%99%AF.jpg",
                Name: "333",
                URL: 'www.baidu.com',
            },
            {
                Id: 4,
                Background: "https://zfblog.su.bcebos.com/zfblogpicture/%E4%BD%9C%E5%93%81%E8%83%8C%E6%99%AF.webp",
                CoverBackground:"https://zfblog.su.bcebos.com/zfblogpicture/%E8%83%8C%E6%99%AF.jpg",
                Name: "444",
                URL: 'www.baidu.com',
            },
            {
                Id: 5,
                Background: "https://zfblog.su.bcebos.com/zfblogpicture/%E4%BD%9C%E5%93%81%E8%83%8C%E6%99%AF.webp",
                CoverBackground:"https://zfblog.su.bcebos.com/zfblogpicture/%E8%83%8C%E6%99%AF.jpg",
                Name: "555",
                URL: 'www.baidu.com',
            },
            {
                Id: 6,
                Background: "https://zfblog.su.bcebos.com/zfblogpicture/%E4%BD%9C%E5%93%81%E8%83%8C%E6%99%AF.webp",
                CoverBackground:"https://zfblog.su.bcebos.com/zfblogpicture/%E8%83%8C%E6%99%AF.jpg",
                Name: "666",
                URL: 'www.baidu.com',
            },
        ]
    }

    componentDidMount = async () => {
    }

    render() {
        const theme = this.context;
        return (
            <div id='Main' style={{ background: theme.bgColor, color: theme.textColor }}>
                <div id='content'>
                    <div id='PersonalWorkpage'>
                        <div className="container">
                            {
                                this.state.works.map((item, index) => {
                                    return (
                                        <div className='WorkBox' key={index}>
                                            <WorkBlock content={item} ></ WorkBlock>
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
