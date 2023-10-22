import React, { Component } from 'react'
import { ThemeContext } from '../../../Utils/Theme/themeContext';
import '../Css/PersonalWorkpage.css'
import WorkBlock from '../Composition/PersonalWorks/WorkBlock/WorkBlock';

export default class PersonalWorkpage extends Component {
    static contextType = ThemeContext;
    state = {
        works: [
            {
                Id: 1,
                Background: "https://image.meiye.art/pic_HsCloLeTzM0zqIycsdcWh?imageMogr2/thumbnail/560x/interlace/1",
                CoverBackground:"https://zfblog.su.bcebos.com/zfblogpicture/lc3908u3.png",
                Name: "下雨的云",
                URL: '/PersonalWork/Rain',
            },
            {
                Id: 2,
                Background: "https://image.meiye.art/pic_rz2Jn3xUiizlUPHf0Ol__",
                CoverBackground:"https://zfblog.su.bcebos.com/zfblogpicture/lc3908u3.png",
                Name: "商城系统",
                URL: '/PersonalWork/Rain',
            },
            {
                Id: 3,
                Background: "https://image.meiye.art/pic_iSpK2ckG9u_L8iOELow_9?imageMogr2/thumbnail/560x/interlace/1",
                CoverBackground:"https://zfblog.su.bcebos.com/zfblogpicture/lc3908u3.png",
                Name: "音乐播放器",
                URL: '/PersonalWork/Rain',
            },
            {
                Id: 4,
                Background: "https://image.meiye.art/pic_kIZqj_DTcmAk6A4VIR4cl?imageMogr2/thumbnail/560x/interlace/1",
                CoverBackground:"https://zfblog.su.bcebos.com/zfblogpicture/lc3908u3.png",
                Name: "视觉差网页",
                URL: '/PersonalWork/Rain',
            },
            {
                Id: 5,
                Background: "https://image.meiye.art/pic_1631338965997B3yCnf3lcRyMhB8BP3CjA?imageMogr2/thumbnail/560x/interlace/1",
                CoverBackground:"https://zfblog.su.bcebos.com/zfblogpicture/lc3908u3.png",
                Name: "AI绘图",
                URL: '/PersonalWork/Rain',
            },
            {
                Id: 6,
                Background: "https://image.meiye.art/pic_YdnhEeIiRJXFy6O6MsrhF?imageMogr2/thumbnail/560x/interlace/1",
                CoverBackground:"https://zfblog.su.bcebos.com/zfblogpicture/lc3908u3.png",
                Name: "ChatGpt教师端",
                URL: '/PersonalWork/Chatgpt4',
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
