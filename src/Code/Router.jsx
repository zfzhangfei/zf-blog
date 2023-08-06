import React, { Component } from "react";
import Settingspage from "./Module/Page/Settingspage";
// import IntroductionConfig from "./Module/Composition/Settings/IntroductionConfig/IntroductionConfig";
import Homepage from "./Module/Page/Homepage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { lightTheme, darkTheme, getNavyBlueWhite, getDarkPurpleLightPurple, getPeachPinkCocoa } from '../Plugin/theme';
import { ThemeContext } from '../Plugin/themeContext';
import AuthRoute from "./authRoute";
import MyNav from "./Component/MyNav";

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