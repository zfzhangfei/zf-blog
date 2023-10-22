import React, { Component } from 'react'
import { ThemeContext } from '../../Utils/Theme/themeContext';

export default class MyFooter extends Component {
    static contextType = ThemeContext;
    render() {
        const theme = this.context;
        return (
            <div>
                <footer style={{ height: 200, background: theme.navBgColor, color: theme.navTextColor }}>
                    321312313
                </footer>
            </div>
        )
    }
}
