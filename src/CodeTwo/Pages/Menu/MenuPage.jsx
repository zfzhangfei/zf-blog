import React, { Component } from 'react'
import MenuOne from './MenuComponents/MenuOne/MenuOne'
import './MenuPage.scss'
import { Button } from 'antd'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import 'animate.css'

export default class MenuPage extends Component {
    GoBack = () => {
        this.props.history.goBack();
        // this.props.history.push('/Home')
    }

    changeAnimation = (value) => {
        this.props.changeAnimation(value)

    }

    toggleMenu = () => {
        // this.props.toggleMenu()
    }

    render() {
        return (
            <div id='MenuPage'>
                <div className='GoBack'
                    onClick={() => {
                        this.GoBack()
                    }}
                >
                    <Button
                        type="primary"
                        shape="circle"
                        position="absolute"
                        style={{
                            backgroundColor: 'rgba(255,255,255,0)'
                        }}
                        icon={<ArrowLeftOutlined />} />
                </div>
                <div className='GoArticle'
                    onClick={() => {
                        this.toggleMenu()
                    }}
                >
                    <Button
                        type="primary"
                        shape="circle"
                        position="absolute"
                        style={{
                            backgroundColor: 'rgba(255,255,255,0)'
                        }}
                        icon={<ArrowLeftOutlined />} />
                </div>
                <MenuOne props={this.props} changeAnimation={this.changeAnimation} toggleMenu={this.toggleMenu}></MenuOne>

            </div>
        )
    }
}
