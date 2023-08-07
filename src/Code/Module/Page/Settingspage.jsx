import React, { Component } from 'react'
import '../Css/Settingspage.css'
import { ThemeContext } from '../../../Plugin/Theme/themeContext'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SiderBar from '../Composition/Settings/SiderBar';
import IntroductionConfig from '../Composition/Settings/IntroductionConfig/IntroductionConfig';
import ArticalConfig from '../Composition/Settings/ArticalConfig/ArticalConfig';
import MarkerConfig from '../Composition/Settings/MarkerConfig/MarkerConfig';


export default class Settingspage extends Component {
    static contextType = ThemeContext;



    render() {
        const theme = this.context;
        return (
            <div id='Main' style={{ background: theme.bgColor, color: theme.textColor, width: '100vw' }}>
                <div id='Settingspage'>
                    <SiderBar theme={theme} index={this.props.index}></SiderBar>
                    <Switch>
                        <Redirect exact from='/Settings' to="/Settings/IntroductionConfig" component={IntroductionConfig} />
                        <Route path="/Settings/IntroductionConfig" component={IntroductionConfig} />
                        <Route path="/Settings/ArticalConfig" component={ArticalConfig} />
                        <Route path="/Settings/MarkerConfig" component={MarkerConfig} />
                    </Switch>
                </div>
            </div>
        )
    }
}
