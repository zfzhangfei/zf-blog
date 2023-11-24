import React, { Component } from 'react'
import './HomePage.scss'
import CoverOne from './HomeComponents/CoverOne/CoverOne'
import { Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import 'animate.css'
import CoverTwo from './HomeComponents/CoverTwo/CoverTwo'

export default class HomePage extends Component {

  GoNext = () => {
    this.props.history.push('/Menu')
  }

  render() {
    return (

          <div id='HomePage'>
            {/* <div className='GoNext'
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
            </div> */}
            {/* <CoverOne props={this.props}></CoverOne> */}
            <CoverTwo props={this.props}></CoverTwo>
          </div>
          
    )
  }
}
