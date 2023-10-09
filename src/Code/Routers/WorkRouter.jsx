import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WorkRain from '../Module/Composition/PersonalWorks/Works/WorkRain/WorkRain';

export default class WorkRouter extends Component {
    render() {
        return (
            <div>
                <Route path="/PersonalWork/Rain" component={WorkRain} />
            </div>
        )
    }
}
