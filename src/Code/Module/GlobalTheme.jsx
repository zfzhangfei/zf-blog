import React, { Component } from 'react'
import { ThemeProvider } from '../../Plugin/themeProvider';
import { lightTheme, darkTheme ,getNavyBlueWhite,getDarkPurpleLightPurple,getPeachPinkCocoa} from '../../Plugin/theme';
import { ThemeContext } from '../../Plugin/themeContext';
import Main from './Main';
import "./Module.css"

const themeMap = {
    'lightTheme': lightTheme,
    'darkTheme': darkTheme,
    'getNavyBlueWhite':getNavyBlueWhite,
    'getDarkPurpleLightPurple':getDarkPurpleLightPurple,
    'getPeachPinkCocoa':getPeachPinkCocoa
  }

export default class GlobalTheme extends Component {
    state = {
        theme: lightTheme
    }

    changeTheme=(value)=>{
        this.setState({
            theme:themeMap[value],
        })
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state.theme}>
                <Main changeTheme={this.changeTheme}/>
            </ThemeContext.Provider>
        )
    }
}
