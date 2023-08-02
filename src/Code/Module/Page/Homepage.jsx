import React, { Component } from 'react'
import css from '../../../Image/css.png'
import HTML5 from '../../../Image/HTML5.png'


export default class Homepage extends Component {
    state={
        theme:this.props.theme,
        technologyIcon:null,
    }

    componentDidMount=()=>{
       const data=[
            {
                href:"https://www.w3school.com.cn/css/index.asp",
                src:'https://zfblog.su.bcebos.com/zfblogpicture/css.png',
                alt:'css.png',
            },
            {
                href:"https://www.w3school.com.cn/css/index.asp",
                src:'https://zfblog.su.bcebos.com/zfblogpicture/css.png',
                alt:'css.png',
            },
            {
                href:"https://www.w3school.com.cn/css/index.asp",
                src:'https://zfblog.su.bcebos.com/zfblogpicture/css.png',
                alt:'css.png',
            },
        ]
        this.setState({
            technologyIcon:data
        })
    }


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
                            <div>
                                {
                                    this.state.technologyIcon?this.state.technologyIcon.map((item,index)=>{
                                        return(
                                            <a href={item.href} target='_blank'><img src={item.src} alt={item.alt} style={{ width: 20, height: 20 }} /></a>
                                        )
                                    }):''
                                }
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
