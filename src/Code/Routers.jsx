import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { lightTheme, darkTheme, getNavyBlueWhite, getDarkPurpleLightPurple, getPeachPinkCocoa } from '../Utils/Theme/theme';
import { ThemeContext } from '../Utils/Theme/themeContext'
import WorkRouter from "./Routers/WorkRouter";
import Settingspage from "./Module/Page/Settingspage";
import Homepage from "./Module/Page/Homepage";

import MyNav from "./CommonComponent/MyNav";
import Markspage from "./Module/Page/Markspage";
import Historyspage from "./Module/Page/Historyspage";
import FriendLinkpage from "./Module/Page/FriendLinkpage";
import PersonalWorkpage from "./Module/Page/PersonalWorkpage";
import MyFooter from "./CommonComponent/MyFooter";

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
                        <Route exact path={["/", "/PersonalWork"]} >
                            <MyNav changeTheme={this.changeTheme}></MyNav>
                            <Route exact path="/" render={(props) => <Homepage {...props} />} />
                            <Route path="/PersonalWork" component={PersonalWorkpage} />
                            <MyFooter></MyFooter>
                        </Route>
                        <Route path={["/Home", "/Settings", "/Marks", "/Historys", "/FriendLink"]} >
                            <MyNav changeTheme={this.changeTheme}></MyNav>
                            <Route path="/Home" render={(props) => <Homepage {...props} />} />
                            <Route path="/Settings" component={Settingspage} />
                            <Route path="/Marks" component={Markspage} />
                            <Route path="/Historys" component={Historyspage} />
                            <Route path="/FriendLink" component={FriendLinkpage} />
                            <MyFooter></MyFooter>
                        </Route>
                        <WorkRouter></WorkRouter>
                    </Switch>
                </Router>
            </ThemeContext.Provider>
        )
    }
}
