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
import LoginPage from "../Pages/Login/LoginPage";
import HomePage from "../Pages/Home/HomePage";
import "./Router.scss";
import CategoryPage from "../Pages/Category/CategoryPage";
import "animate.css";
import SettingPage from "../Pages/Setting/SettingPage";
import { AnimatePresence, motion } from "framer-motion";
import PrivateGarden from "../Pages/Article/PrivateGarden/PrivateGarden";
import AuthRoute from "./authRoute";
import { GlobalContext } from "../../Utils/GlobalProvider";
import MessageWall from "../Pages/MessageWall/MessageWall";
import ShowVideo from "../Pages/ShowVideo/ShowVideo";
import ShowDesignExample from "../Pages/ShowDesignExample/ShowDesignExample";
import Works from "../Pages/Article/Works/Works";

const themeMap = {
  lightTheme: lightTheme,
  darkTheme: darkTheme,
  getNavyBlueWhite: getNavyBlueWhite,
  getDarkPurpleLightPurple: getDarkPurpleLightPurple,
  getPeachPinkCocoa: getPeachPinkCocoa,
};

class Routers extends Component {
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
            <Route
              render={({ location }) => (
                <Switch location={location} key={location.pathname}>
                  <Route
                    exact
                    path="/"
                    render={(props) => (
                      <HomePage
                        {...props}
                        changeAnimation={this.changeAnimation}
                      />
                    )}
                  />
                  <Route
                    path="/Home"
                    render={(props) => (
                      <div>
                        <HomePage
                          {...props}
                          changeAnimation={this.changeAnimation}
                        />
                      </div>
                    )}
                  />
                  <Route
                    path="/Login"
                    render={(props) => <LoginPage {...props} />}
                  />
                  <AuthRoute
                    path="/Category"
                    render={(props) => (
                      <CategoryPage
                        {...props}
                        changeAnimation={this.changeAnimation}
                      />
                    )}
                  />
                  <AuthRoute
                    path="/Setting"
                    render={(props) => (
                      <SettingPage
                        {...props}
                        changeAnimation={this.changeAnimation}
                      />
                    )}
                  />

                  <AuthRoute
                    path="/Garden"
                    render={(props) => (
                      <div style={{ width: "100vw", height: "100vh" }}>
                        <PrivateGarden {...props} />
                      </div>
                    )}
                  />
                  <AuthRoute
                    path="/MessageWall"
                    render={(props) => <MessageWall {...props} />}
                  />
                  <AuthRoute
                    exact
                    path="/ShowVideo/:name"
                    render={(props) => <ShowVideo {...props}></ShowVideo>}
                  />
                  <AuthRoute
                    exact
                    path="/ShowDesignExample"
                    render={(props) => (
                      <ShowDesignExample {...props}></ShowDesignExample>
                    )}
                  />
                  <AuthRoute
                    exact
                    path="/ShowWebWorks"
                    render={(props) => <Works {...props} pagename={"ImitationPortfolio"}></Works>}
                  />
                </Switch>
              )}
            />
          </ThemeContext.Provider>
        )}
      </GlobalContext.Consumer>
    );
  }
}

export default withRouter(Routers);
