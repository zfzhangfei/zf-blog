import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import VditorEditor from "../../../Plugin/VditorEditor/VditorEditor";
import EditArticlePage from "./SettingComponents/EditArticlePage/EditArticlePage";
import ArticleListPage from "./SettingComponents/ArticleListPage/ArticleListPage";

export default class SettingRouters extends Component {
  render() {
    return (
      <div id="SettingRouters">
        <Router>
          <Switch>
            <Route exact path="/Setting" render={(props) => 111} />
            <Route
              exact
              path="/Setting/articles"
              render={(props) => <ArticleListPage />}
            />
           
          </Switch>
        </Router>
      </div>
    );
  }
}
