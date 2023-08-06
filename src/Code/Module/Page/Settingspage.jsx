import React, { Component } from 'react'
import '../Css/Settingspage.css'
import { ThemeContext } from '../../../Plugin/themeContext'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SiderBar from '../Composition/Settings/SiderBar';
import IntroductionConfig from '../Composition/Settings/IntroductionConfig/IntroductionConfig';
import ArticalConfig from '../Composition/Settings/ArticalConfig/ArticalConfig';


export default class Settingspage extends Component {
    static contextType = ThemeContext;





    render() {
        const theme = this.context;
        return (
            <div id='Main' style={{ background: theme.bgColor, color: theme.textColor, width: '100vw' }}>
                <div id='Settingspage'>
                    <Router>
                        <SiderBar theme={theme}></SiderBar>
                        <Switch>
                            <Route exact path="/Settings">
                                <Redirect to="/Settings/IntroductionConfig" component={IntroductionConfig}/>
                            </Route>
                            <Route path="/Settings/IntroductionConfig" component={IntroductionConfig} />
                            <Route path="/Settings/ArticalConfig" component={ArticalConfig} />
                        </Switch>
                    </Router>
                </div>
            </div>
        )
    }
}
