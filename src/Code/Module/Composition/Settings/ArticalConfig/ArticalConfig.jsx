import React, { Component } from 'react'
import TextbusEditor from '../../../../../Plugin/Textbus/TextbusEditor'
import { postArtical } from '../../../Api/Api';
import { Button } from 'antd';

export default class ArticalConfig extends Component {
    state = {
        Content: null
    }

    getContent = (value) => {
        this.setState({
            Content: value
        })

    }

    handleArtical = () => {
        postArtical('111', 1, this.state.Content)
    }
    render() {
        return (
            <div className='SettingsContent'>
                <Button onClick={() => { this.handleArtical() }}></Button>
                <TextbusEditor getContent={this.getContent}></TextbusEditor>
            </div>
        )
    }
}
 