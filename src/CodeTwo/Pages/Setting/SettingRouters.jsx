import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import VditorEditor from "../../../Plugin/VditorEditor/VditorEditor";
import EditArticlePage from "./SettingComponents/ArticleListPage/ArticleListComponents/EditArticlePage/EditArticlePage";
import ArticleListPage from "./SettingComponents/ArticleListPage/ArticleListPage";
import CommentManagePage from "./SettingComponents/CommentManagePage/CommentManagePage";
import HomeSettingPage from "./SettingComponents/HomeSettingPage/HomeSettingPage";

export default class SettingRouters extends Component {
  render() {
    return (
      <div id="SettingRouters" style={{ height: "100%" }}>
        <Router>
          <Switch>
            <Route
              exact
              path="/Setting"
              render={(props) => <HomeSettingPage />}
            />
            <Route
              exact
              path="/Setting/articles"
              render={(props) => <ArticleListPage />}
            />
            <Route
              exact
              path="/Setting/comments"
              render={(props) => <CommentManagePage />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
