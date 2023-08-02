import React, { Component } from "react";
import Login from './Module/Login'
import Main from './Module/Main'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthRoute from './authRoute'
import { lightTheme, darkTheme, getNavyBlueWhite, getDarkPurpleLightPurple, getPeachPinkCocoa } from '../Plugin/theme';
import { ThemeContext } from '../Plugin/themeContext';
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
                        <Route exact path="/" component={Main} />
                        <Route path="/Login" component={Login} />
                        <Route path="/Home" component={Main} />
                    </Switch>
                </Router>
            </ThemeContext.Provider>
        )
    }
}