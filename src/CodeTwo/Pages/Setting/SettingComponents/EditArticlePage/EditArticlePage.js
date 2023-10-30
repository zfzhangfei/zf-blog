import React from 'react'
import VditorEditor from '../../../../../Plugin/VditorEditor/VditorEditor'
import './EditArticlePage.scss'
import { Button } from 'antd'
import ArticleDrawer from '../Drawer/ArticleDrawer'

export default function EditArticlePage({ props }) {
    return (
        <div id='EditArticlePage'>
            <div className='EditArticleBox1'>
                <ArticleDrawer></ArticleDrawer>
            </div>
            <div className='EditArticleBox2'>
                <VditorEditor props={props} />
            </div>
        </div>
    )
}
