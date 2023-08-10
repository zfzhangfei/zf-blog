import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import html from 'remark-html';
import { getArtical } from '../../Api/Api'

export default class ShowArtical extends Component {
    state = {
        htmlString: null
    }
    componentDidMount = async () => {
        this.setState({
            htmlString: await getArtical(2)
        })
    }
    render() {
        return (
            <div>
                {
                    console.log(this.state.htmlString)
                }
                {
                    this.state.htmlString ?
                        <ReactMarkdown
                            plugins={[html]}
                            source={this.state.htmlString.Content}
                        /> : ''
                }
            </div>
        )
    }
} 
