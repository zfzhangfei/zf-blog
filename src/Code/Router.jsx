import React, { Component } from "react";
import Settingspage from "./Module/Page/Settingspage";
import Homepage from "./Module/Page/Homepage";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { lightTheme, darkTheme, getNavyBlueWhite, getDarkPurpleLightPurple, getPeachPinkCocoa } from '../Plugin/Theme/theme';
import { ThemeContext } from '../Plugin/Theme/themeContext';
import MyNav from "./CommonComponent/MyNav";

const themeMap = {
    'lightTheme': lightTheme,
    'darkTheme': darkTheme,
    'getNavyBlueWhite': getNavyBlueWhite,
    'getDarkPurpleLightPurple': getDarkPurpleLightPurple,
    'getPeachPinkCocoa': getPeachPinkCocoa
}


export default class HomeRouter extends Component {

    state = {
        theme: lightTheme
    }

    changeTheme = (value) => {
        this.setState({
            theme: themeMap[value],
        })
    }

    render() {
        return (

            <ThemeContext.Provider value={this.state.theme}>
                    <Router>
                        <MyNav changeTheme={this.changeTheme}></MyNav>
                        <Switch>
                            <Route exact path="/" component={Homepage} />
                            <Route path="/Home" component={Homepage} />
                            <Route path="/Settings" component={Settingspage} />
                        </Switch>
                    </Router>
            </ThemeContext.Provider>

        )
    }
}