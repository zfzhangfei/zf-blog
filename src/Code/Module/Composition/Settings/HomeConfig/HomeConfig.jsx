import React, { Component } from 'react'
import IntroductionConfig from './IntroductionConfig/IntroductionConfig'
import MarkConfig from './MarkConfig/MarkConfig'
import SkillIcon from './IntroductionConfig/SkillIcon'
import MaximInput from './IntroductionConfig/MaximInput'
import { Space, Row, Col } from 'antd'
import HistoryTable from '../HistoryConfig/HistoryTable'


const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

export default class HomeConfig extends Component {


    render() {
        return (
            <div className='SettingsContent'>
                <div className='HomeConfig'>
                    <div className='item-a'>
                        <IntroductionConfig></IntroductionConfig>
                    </div>
                    <div className='item-b'>
                        <div className='item-b-a'>
                            <div className='box'>

                            </div>
                        </div>
                        <div className='item-b-b'>
                            <div className='box'>

                            </div>
                        </div>
                        <div className='item-b-c'>
                            <div className='box'>

                            </div>
                        </div>
                        <div className='item-b-d'>
                            <div className='box'>

                            </div>
                        </div>
                    </div>
                    <div className='item-c'>
                        <MarkConfig></MarkConfig>
                    </div>
                    <div className='item-d'>
                        <MarkConfig></MarkConfig>
                    </div>
                    <div className='item-e'>
                        <HistoryTable data={data}></HistoryTable>
                    </div>
                    <div className='item-f'>
                        <MarkConfig></MarkConfig>
                    </div>
                </div>
            </div>
        )
    }
}
