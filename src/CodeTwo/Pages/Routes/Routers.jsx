import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { lightTheme, darkTheme, getNavyBlueWhite, getDarkPurpleLightPurple, getPeachPinkCocoa } from '../../../Utils/Theme/theme';
import { ThemeContext } from '../../../Utils/Theme/themeContext'
import LoginPage from "../Login/LoginPage";
import HomePage from "../Home/HomePage";




const themeMap = {
    'lightTheme': lightTheme,
    'darkTheme': darkTheme,
    'getNavyBlueWhite': getNavyBlueWhite,
    'getDarkPurpleLightPurple': getDarkPurpleLightPurple,
    'getPeachPinkCocoa': getPeachPinkCocoa
}


export default class Routers extends Component {

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
                    <Switch>
                        <Route>
                            {/* <header style={{ height: 50 }}>header</header> */}
                            <div id="Main">
                                <HomePage></HomePage>
                            </div>
                            {/* <footer style={{ height: 50 }}>footer</footer> */}
                        </Route>
                    </Switch>
                </Router>
            </ThemeContext.Provider>
        )
    }
}
