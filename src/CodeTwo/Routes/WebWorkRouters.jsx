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
import Works from "../Pages/Article/Works/Works";

const themeMap = {
  lightTheme: lightTheme,
  darkTheme: darkTheme,
  getNavyBlueWhite: getNavyBlueWhite,
  getDarkPurpleLightPurple: getDarkPurpleLightPurple,
  getPeachPinkCocoa: getPeachPinkCocoa,
};

class WebWorkRouters extends Component {
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
                    path="/ShowWebWorks/:id"
                    render={(props) => <Works {...props} ></Works>}
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

export default withRouter(WebWorkRouters);
