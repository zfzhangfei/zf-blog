import React, { Component } from 'react'
import { ThemeContext } from '../../../Utils/Theme/themeContext';
import '../Css/Markspage.css'


export default class FriendLinkpage extends Component {
    static contextType = ThemeContext;

    render() {
        const theme = this.context;
        return (
            <div id='Main' style={{ background: theme.bgColor, color: theme.textColor, width: '100vw' }}>
                <div id='FriendLinkpage'>
                    FriendLinkpage
                </div>
            </div>
        )
    }
}
