import React, { Component } from 'react'
import './HomePage.scss'
import CoverOne from './HomeComponents/CoverOne/CoverOne'
import { Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import 'animate.css'

export default class HomePage extends Component {

  GoNext = () => {
    this.props.history.push('/Menu')
    this.props.changeAnimation("animate__animated animate__fadeInLeft animate__animated animate__fadeOutRight")
  }

  render() {
    return (
      <TransitionGroup>
        <CSSTransition
          key={this.props.location.pathname}
          timeout={450}
          classNames={"animate__animated animate__zoomIn animate__zoomOut"}
        >
          <div id='HomePage'>
            <div className='GoNext'
              onClick={() => {
                this.GoNext()
              }}
            >
              <Button
                type="primary"
                shape="circle"
                position="absolute"
                style={{
                  backgroundColor: 'rgba(255,255,255,0)'
                }}
                icon={<ArrowRightOutlined />} />
            </div>
            <CoverOne props={this.props}></CoverOne>
          </div>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}
