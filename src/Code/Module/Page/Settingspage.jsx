import React, { Component } from 'react'
import '../Css/Settingspage.scss'
import { ThemeContext } from '../../../Utils/Theme/themeContext'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SiderBar from '../Composition/Settings/SiderBar';
import ArticalConfig from '../Composition/Settings/ArticalTable/ArticalConfig';
import HistoryConfig from '../Composition/Settings/HistoryConfig/HistoryConfig';
import HomeConfig from '../Composition/Settings/HomeConfig/HomeConfig';
import UserConfig from '../Composition/Settings/UserConfig/UserConfig';


export default class Settingspage extends Component {
    static contextType = ThemeContext;

    state = {
        index: 0
    }




    render() {
        const theme = this.context;
        return (
            <div id='Main' style={{ background: theme.bgColor, color: theme.textColor}}>
                    <div id='Settingspage'>
                        <SiderBar theme={theme} index={this.state.index}></SiderBar>
                        <Switch>
                            <Redirect exact from='/Settings' to="/Settings/IntroductionConfig" component={HomeConfig} />
                            <Route path="/Settings/IntroductionConfig" component={HomeConfig} />
                            <Route path="/Settings/ArticalConfig" component={ArticalConfig} />
                            <Route path="/Settings/UserConfig" component={UserConfig} />
                            <Route path="/Settings/HistoryConfig" component={HistoryConfig} />
                        </Switch>
                    </div>
            </div>
        )
    }
}
