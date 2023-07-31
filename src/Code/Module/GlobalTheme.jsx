import React, { Component } from 'react'
import { ThemeProvider } from '../../Plugin/themeProvider';
import { lightTheme, darkTheme } from '../../Plugin/theme';
import { ThemeContext } from '../../Plugin/themeContext';
import HomeMain from './HomeMain';
import "../Css/AllCss.css"

export default class GlobalTheme extends Component {
    state = {
        theme: darkTheme
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state.theme}>
                <HomeMain />
            </ThemeContext.Provider>
        )
    }
}
