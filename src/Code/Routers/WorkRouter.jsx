import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WorkRain from '../Module/Composition/PersonalWorks/Works/WorkRain/WorkRain';
import WorkChatgpt4 from '../Module/Composition/PersonalWorks/Works/WorkChatgpt4/WorkChatgpt4';

export default class WorkRouter extends Component {
    render() {
        return (
            <div>
                <Route path="/PersonalWork/Rain" component={WorkRain} />
                <Route path="/PersonalWork/Chatgpt4" component={WorkChatgpt4} />
            </div>
        )
    }
}
