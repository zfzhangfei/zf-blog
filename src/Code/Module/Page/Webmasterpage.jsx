import React, { Component } from 'react'
import { ThemeContext } from '../../../Utils/Theme/themeContext';
import '../Css/Webmasterpage.css'


export default class Webmasterpage extends Component {
    static contextType = ThemeContext;

    componentDidMount = async () => {
    }

    render() {
        const theme = this.context;
        return (
            <div id='Main' style={{ background: theme.bgColor, color: theme.textColor }}>
                <div id='content'>
                    <div id='Webmasterpage'>
                        Webmasterpage
                    </div>
                </div>
            </div>
        )
    }
}




