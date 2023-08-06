import React, { Component } from 'react'
import { SidebarLink } from './SidebarLink';

export default class SiderBar extends Component {
    state = {
        index: localStorage.getItem('SidebarLink') ? parseInt(localStorage.getItem('SidebarLink')) : 0
    }

    componentWillUnmount = () => {
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
                            this.setState({ index: 0 })
                            localStorage.setItem('SidebarLink', 0)
                        }}>主题</p>
                </SidebarLink>
                <SidebarLink to="/Settings/ArticalConfig"
                    className={index === 1 ? 'active' : ''}
                    IsActive={index === 1}
                    theme={this.props.theme}>
                    <p style={{ color: this.props.theme.SidebarLinkTextColor }}
                        onClick={() => {
                            this.setState({ index: 1 })
                            localStorage.setItem('SidebarLink', 1)
                        }}>文章</p>
                </SidebarLink>
            </div >
        )
    }
}
