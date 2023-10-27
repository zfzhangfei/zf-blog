import React, { Component } from 'react'
import './CategoryPage.scss'
import CategoryOne from './CategoryComponets/CategoryOne/CategoryOne'
import { Button } from 'antd'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'

export default class CategoryPage extends Component {

    render() {
        return (
            <div id='CategoryPage'>
                <CategoryOne props={this.props} changeAnimation={this.changeAnimation}></CategoryOne>
            </div>
        )
    }
}
