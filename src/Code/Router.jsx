import React, { Component } from "react";
import Login from './Module/Login'
import GlobalTheme from "./Module/GlobalTheme";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthRoute from './authRoute'

export default class HomeRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={GlobalTheme} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Home" component={GlobalTheme} />
                </Switch>
            </Router>
        )
    }
}