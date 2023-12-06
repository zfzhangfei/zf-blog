import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import {
  lightTheme,
  darkTheme,
  getNavyBlueWhite,
  getDarkPurpleLightPurple,
  getPeachPinkCocoa,
} from "../../Utils/Theme/theme";
import { ThemeContext } from "../../Utils/Theme/themeContext";
import "./Router.scss";
import "animate.css";
import { GlobalContext } from "../../Utils/GlobalProvider";
import ShowArticleList from "../Pages/Home/HomeComponents/CoverTwo/CoverTwoComponents/Home/HomeComponents/ShowArticleList/ShowArticleList";
import ShowArticleContent from "../Pages/Home/HomeComponents/CoverTwo/CoverTwoComponents/Home/HomeComponents/ShowArticleContent/ShowArticleContent";
import ShowVideoList from "../Pages/Home/HomeComponents/CoverTwo/CoverTwoComponents/Home/HomeComponents/ShowVideoList/ShowVideoList";
import ShowPhotoList from "../Pages/Home/HomeComponents/CoverTwo/CoverTwoComponents/Home/HomeComponents/ShowPhotoList/ShowPhotoList";
import ShowDesignExampleList from "../Pages/Home/HomeComponents/CoverTwo/CoverTwoComponents/Home/HomeComponents/ShowDesignExampleList/ShowDesignExampleList";
import ShowPhoto from "../Pages/Home/HomeComponents/CoverTwo/CoverTwoComponents/Home/HomeComponents/ShowPhotoList/ShowPhotoListComponents/ShowPhoto";

const themeMap = {
  lightTheme: lightTheme,
  darkTheme: darkTheme,
  getNavyBlueWhite: getNavyBlueWhite,
  getDarkPurpleLightPurple: getDarkPurpleLightPurple,
  getPeachPinkCocoa: getPeachPinkCocoa,
};

class SiderBorderRouters extends Component {
  state = {
    theme: lightTheme,
    animation: {
      in: { opacity: 0 },
      out: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 1.0 },
    },
  };

  changeTheme = (value) => {
    this.setState({
      theme: themeMap[value],
    });
  };

  changeAnimation = () => {};

  render() {
    return (
      <GlobalContext.Consumer>
        {(context) => (
          <ThemeContext.Provider value={this.state.theme}>
            <Router>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <div>
                      <ShowArticleList props={props}></ShowArticleList>
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/Home"
                  render={(props) => (
                    <div>
                      <ShowArticleList props={props}></ShowArticleList>
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/Home/Tag/:name"
                  render={(props) => (
                    <ShowArticleList props={props}></ShowArticleList>
                  )}
                />
                <Route
                  path="/Home/Article/:id"
                  render={(props) => <ShowArticleContent props={props} />}
                />
                <Route
                  exact
                  path="/Home/Video"
                  render={(props) => (
                    <ShowVideoList props={props}></ShowVideoList>
                  )}
                />
                <Route
                  exact
                  path="/Home/Photo"
                  render={(props) => (
                    <ShowPhotoList props={props}></ShowPhotoList>
                  )}
                />
                <Route
                  exact
                  path="/Home/DesignExample"
                  render={(props) => (
                    <ShowDesignExampleList
                      props={props}
                    ></ShowDesignExampleList>
                  )}
                />
                <Route
                  exact
                  path="/Home/ShowPhoto/:name"
                  render={(props) => <ShowPhoto props={props}></ShowPhoto>}
                />
              </Switch>
            </Router>
          </ThemeContext.Provider>
        )}
      </GlobalContext.Consumer>
    );
  }
}

export default withRouter(SiderBorderRouters);
