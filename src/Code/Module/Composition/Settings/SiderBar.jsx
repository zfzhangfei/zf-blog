import React, { Component } from 'react'
import { SidebarLink } from './SidebarLink';

export default class SiderBar extends Component {
    state = {
        index: 0
    }

    componentDidMount = () => {
        const index = localStorage.getItem('activeIndex');

        if (index !== null) {
            this.setState({ index: parseInt(index) });
        }
    }

    componentWillUnmount=()=>{
        localStorage.clear()
    }

    render() {
        const { index } = this.state
        return (
            <div className='SiderBar' style={{ background: this.props.theme.SidebarBgColor }}>
                <SidebarLink to="/Settings/IntroductionConfig"
                    className={index === 0 ? 'active' : ''}
                    IsActive={index === 0}
                    theme={this.props.theme}>
                    <p style={{ color: this.props.theme.SidebarLinkTextColor }}
                        onClick={() => {
                            localStorage.setItem('activeIndex', 0);
                            this.setState({ index: 0 })
                        }}>首页</p>
                </SidebarLink>
                <SidebarLink to="/Settings/ArticalConfig"
                    className={index === 1 ? 'active' : ''}
                    IsActive={index === 1}
                    theme={this.props.theme}>
                    <p style={{ color: this.props.theme.SidebarLinkTextColor }}
                        onClick={() => {
                            localStorage.setItem('activeIndex', 1);
                            this.setState({ index: 1 })
                        }}>文章</p>
                </SidebarLink>
                {/* <SidebarLink to="/Settings/MarkerConfig"
                    className={index === 2 ? 'active' : ''}
                    IsActive={index === 2}
                    theme={this.props.theme}>
                    <p style={{ color: this.props.theme.SidebarLinkTextColor }}
                        onClick={() => {
                            localStorage.setItem('activeIndex', 2);
                            this.setState({ index: 2 })
                        }}>标签</p>
                </SidebarLink> */}
                <SidebarLink to="/Settings/HistoryConfig"
                    className={index === 3 ? 'active' : ''}
                    IsActive={index === 3}
                    theme={this.props.theme}>
                    <p style={{ color: this.props.theme.SidebarLinkTextColor }}
                        onClick={() => {
                            localStorage.setItem('activeIndex', 3);
                            this.setState({ index: 3 })
                        }}>建站历史</p>
                </SidebarLink>
            </div >
        )
    }
}
