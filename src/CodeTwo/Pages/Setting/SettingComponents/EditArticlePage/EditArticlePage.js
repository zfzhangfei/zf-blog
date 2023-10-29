import React from 'react'
import VditorEditor from '../../../../../Plugin/VditorEditor/VditorEditor'
import './EditArticlePage.scss'
import { Button } from 'antd'

export default function EditArticlePage({ props }) {
    return (
        <div id='EditArticlePage'>
            <div className='EditArticleBox1'>
                <Button type='primary' style={{margin:5}}>新建文章</Button>
            </div>
            <div className='EditArticleBox2'>
                <VditorEditor props={props} />
            </div>
        </div>
    )
}
