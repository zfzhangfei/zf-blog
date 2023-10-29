import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import VditorEditor from '../../../Plugin/VditorEditor/VditorEditor';
import EditArticlePage from './SettingComponents/EditArticlePage/EditArticlePage';

export default class SettingRouters extends Component {
    render() {
        return (
            <div id='SettingRouters'>
                <Router>
                    <Switch>
                        <Route exact path="/Setting/home" render={(props) =>
                            111
                        } />
                        <Route exact path="/Setting/articles" render={(props) =>
                            222
                        } />
                        <Route exact path="/Setting/EditArticle" render={(props) =>
                           <EditArticlePage></EditArticlePage>
                        } />
                    </Switch>
                </Router>
            </div>
        )
    }
}
