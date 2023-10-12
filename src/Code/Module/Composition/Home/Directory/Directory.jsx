import React, { Component } from 'react'
import Toc from './Toc'
import { ThemeContext } from '../../../../../Utils/Theme/themeContext';

export default class Directory extends Component {
    static contextType = ThemeContext;
    componentDidMount = () => {
    }
    render() {
        const theme = this.context;
        return (
            <div className='Directory' style={{backgroundImage:theme.DirectoryColor}}>
                <h1>目录</h1>
                <div>
                    {this.props.directList && <Toc toc={this.props.directList}></Toc>}
                </div>
            </div>
        )
    }
}