import React, { Component } from 'react'
import TextbusEditor from '../../../../../Plugin/Textbus/TextbusEditor'
import { editorHTML } from '../../../../../Plugin/Textbus/TextbusEditor';

export default class ArticalConfig extends Component {

    render() {
        return (
            <div className='SettingsContent'>
                <TextbusEditor></TextbusEditor>
            </div>
        )
    }
}
