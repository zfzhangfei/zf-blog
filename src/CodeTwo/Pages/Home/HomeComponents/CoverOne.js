import React, { useState } from 'react'
import './CoverOne.scss'
import { Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import Link from 'antd/es/typography/Link'

export default function CoverOne({ props }) {

    const GoNext = () => {
        props.history.push('/Login')
    }

    return (
        <div id='CoverOne' >
            <div className='MiddleBox1'>

            </div>
            <div className='MiddleBox2'>
                <div className='MiddleBox7'>
                    <div className='CoverText'>
                        <p style={{
                            fontSize: '1.5vw',
                            lineHeight: 3,
                        }}>
                            少女的梦里有海，<br />
                            有日落，<br />
                            有蝉鸣不止的盛夏，<br />
                            和永不凋零的玫瑰🌹
                        </p>
                        <div className='MiddleBox8'>

                        </div>
                    </div>
                </div>
                <Button
                    type="primary"
                    shape="circle"
                    position="absolute"
                    style={{
                        // backgroundColor:"rgba(0,0,0,0)"
                        zIndex: 10,
                    }}
                    onClick={() => {
                        GoNext()
                    }}

                    icon={<ArrowRightOutlined />} />

            </div>
            <div className='CoverCoverOne'>
                <div className='MiddleBox3'>

                </div>
                <div className='MiddleBox4'>
                    <div className='MiddleBox6'>

                    </div>
                </div>
                <div className='MiddleBox5'>

                </div>
            </div>
            <text style={{ fontSize: "10vw", position: 'absolute', color: '#fff', opacity: '0.3' }}>
                Be <br />&emsp;yourself </text>
        </div>
    )
}
