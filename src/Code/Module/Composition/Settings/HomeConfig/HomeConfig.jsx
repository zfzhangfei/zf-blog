import React, { Component } from 'react'
import IntroductionConfig from './IntroductionConfig/IntroductionConfig'
import MarkConfig from './MarkConfig/MarkConfig'
import { Space, Row, Col } from 'antd'

export default class HomeConfig extends Component {
    render() {
        return (
            <div className='SettingsContent'>
                <div className='HomeConfig'>
                    <div style={{ height: 'auto' }}>
                        <Row gutter={[16, 16]} >
                            <Col span={6}>
                                <div id='IntroductionConfig'>
                                    <IntroductionConfig></IntroductionConfig>
                                </div>
                            </Col>
                            <Col span={18}>
                                <Row gutter={[16, 16]} >
                                    <Col span={12}>
                                        <div style={{ height: 100, background: 'pink' }}>
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div style={{ height: 100, background: 'pink' }}>
                                        </div>
                                    </Col>
                                </Row>
                                <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
                                    <Col span={12}>
                                        <div style={{ height: 100, background: 'pink' }}>
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div style={{ height: 100, background: 'pink' }}>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                    </div>
                    <div style={{ flex: 1,height:'100%'}}>
                        <Row gutter={[16, 16]} style={{ marginTop: 16 ,height:'100%'}}>
                            <Col span={8}>
                                <div id='MarkConfig'>
                                    <MarkConfig></MarkConfig>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div id='MarkConfig'>
                                    <MarkConfig></MarkConfig>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div id='MarkConfig'>
                                    <MarkConfig></MarkConfig>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}
