import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import VditorEditor from "../../Plugin/VditorEditor/VditorEditor";
import EditArticlePage from "../Pages/Setting/SettingComponents/ArticleListPage/ArticleListComponents/EditArticlePage/EditArticlePage";
import ArticleListPage from "../Pages/Setting/SettingComponents/ArticleListPage/ArticleListPage";
import CommentManagePage from "../Pages/Setting/SettingComponents/CommentManagePage/CommentManagePage";
import HomeSettingPage from "../Pages/Setting/SettingComponents/HomeSettingPage/HomeSettingPage";
import PhotoSettingPage from "../Pages/Setting/SettingComponents/PhotoSettingPage/PhotoSettingPage";

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
            <Route
              exact
              path="/Setting/photos"
              render={(props) => <PhotoSettingPage />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
