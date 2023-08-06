import React, { Component } from 'react'
import { Avatar } from 'antd';
import { getSkillIcon, getCurrentUser } from '../../Api/Api'

export default class Introduction extends Component {
    state = {
        technologyIcon: null,
        userIntroduction: {}
    }

    componentDidMount = async () => {
        this.setState({
            technologyIcon: await getSkillIcon(),
            userIntroduction: await getCurrentUser(),
        })
    }

    render() {
        return (
            <div className='Introduction' style={{ background: this.props.theme.introductionBgColor }}>
                <div className='Avatar'>
                    <Avatar
                        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                        src={<img src={this.state.userIntroduction.avatar} alt="avatar" />}
                    />
                </div>
                <div className='Quote'>
                    <p>{this.state.userIntroduction.maxim}</p>
                    <h1>{this.state.userIntroduction.username}</h1>
                </div>
                <div className='technologyIcon'>
                    {
                        this.state.technologyIcon ? this.state.technologyIcon.map((item, index) => {
                            return (
                                <a href={item.Href} target='_blank' key={index} style={{ width: 50, height: 50,margin:5}}><img src={item.BosPath} alt={item.BosName} style={{ width: 25, height: 25 }} /></a>
                            )
                        }) : ''
                    }
                </div>
            </div>
        )
    }
}
