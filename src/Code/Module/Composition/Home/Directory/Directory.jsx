import React, { Component } from 'react'
import Toc from './Toc'

export default class Directory extends Component {
    componentDidMount = () => {
    }
    render() {
        return (
            <div className='Directory'>
                <h1>目录</h1>
                <div>
                    {this.props.directList && <Toc toc={this.props.directList}></Toc>}
                </div>
            </div>
        )
    }
}