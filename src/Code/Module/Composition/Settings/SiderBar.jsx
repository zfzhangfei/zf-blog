import React, { Component } from 'react'
import { SidebarLink } from './SidebarLink';

export default class SiderBar extends Component {
    state = {
        index: 0
    }

    componentDidMount=()=>{
        console.log('====================================');
        console.log(this.props.index);
        console.log('====================================');
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
                        }}>主题</p>
                </SidebarLink>
                <SidebarLink to="/Settings/ArticalConfig"
                    className={index === 1 ? 'active' : ''}
                    IsActive={index === 1}
                    theme={this.props.theme}>
                    <p style={{ color: this.props.theme.SidebarLinkTextColor }}
                        onClick={() => {
                            this.setState({ index: 1 })
                        }}>文章</p>
                </SidebarLink>
                <SidebarLink to="/Settings/MarkerConfig"
                    className={index === 2 ? 'active' : ''}
                    IsActive={index === 2}
                    theme={this.props.theme}>
                    <p style={{ color: this.props.theme.SidebarLinkTextColor }}
                        onClick={() => {
                            this.setState({ index: 2 })
                        }}>标签</p>
                </SidebarLink>
            </div >
        )
    }
}
