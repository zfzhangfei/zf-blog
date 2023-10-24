import React, { Component } from 'react'
import './CategoryPage.scss'
import CategoryOne from './CategoryComponets/CategoryOne/CategoryOne'
import { Button } from 'antd'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'

export default class CategoryPage extends Component {

    GoBack = () => {
        this.props.history.goBack();
        this.props.changeAnimation("up")
    }


    render() {
        return (
            <div id='CategoryPage'>
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
                <CategoryOne props={this.props} changeAnimation={this.changeAnimation}></CategoryOne>
            </div>
        )
    }
}
