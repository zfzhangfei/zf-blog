// import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { lightTheme, darkTheme, getNavyBlueWhite, getDarkPurpleLightPurple, getPeachPinkCocoa } from '../../../Utils/Theme/theme';
// import { ThemeContext } from '../../../Utils/Theme/themeContext'
// import LoginPage from "../Login/LoginPage";
// import HomePage from "../Home/HomePage";
// import MenuPage from "../Menu/MenuPage";
// import CategoryPage from "../Category/CategoryPage";

// const themeMap = {
//     'lightTheme': lightTheme,
//     'darkTheme': darkTheme,
//     'getNavyBlueWhite': getNavyBlueWhite,
//     'getDarkPurpleLightPurple': getDarkPurpleLightPurple,
//     'getPeachPinkCocoa': getPeachPinkCocoa
// }

// export default class Routers extends Component {

//     state = {
//         theme: lightTheme
//     }

//     changeTheme = (value) => {
//         this.setState({
//             theme: themeMap[value],
//         })
//     }

//     render() {
//         return (
//             <ThemeContext.Provider value={this.state.theme}>
//                 <Router>
//                     <Switch>
//                         <Route>
//                             <div id="Main">
//                                 <Route exact path="/" render={(props) => <HomePage {...props} />} />
//                                 <Route path="/Home" component={HomePage} />
//                                 <Route path="/Menu" component={MenuPage} />
//                                 <Route path="/Category" component={CategoryPage} />
//                                 <Route path="/Login" component={LoginPage} />
//                             </div>
//                         </Route>
//                     </Switch>
//                 </Router>
//             </ThemeContext.Provider>
//         )
//     }
// }

// import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
// import { CSSTransition, TransitionGroup, SwitchTransition } from 'react-transition-group';
// import { lightTheme, darkTheme, getNavyBlueWhite, getDarkPurpleLightPurple, getPeachPinkCocoa } from '../../Utils/Theme/theme';
// import { ThemeContext } from '../../Utils/Theme/themeContext'
// import LoginPage from "../Pages/Login/LoginPage";
// import HomePage from "../Pages/Home/HomePage";
// import './Router.scss'
// import MenuPage from "../Pages/Menu/MenuPage";
// import CategoryPage from "../Pages/Category/CategoryPage";
// import 'animate.css';
// import ArticlePage from "../Pages/Article/ArticlePage";
// import SettingPage from "../Pages/Setting/SettingPage";

// const themeMap = {
//     'lightTheme': lightTheme,
//     'darkTheme': darkTheme,
//     'getNavyBlueWhite': getNavyBlueWhite,
//     'getDarkPurpleLightPurple': getDarkPurpleLightPurple,
//     'getPeachPinkCocoa': getPeachPinkCocoa
// }

// class Routers extends Component {

//     state = {
//         theme: lightTheme,
//         animationClass: "animate__bounceInDown"
//     }

//     changeTheme = (value) => {
//         this.setState({
//             theme: themeMap[value],
//         })
//     }

//     changeAnimation = (newAnimation) => {
//         this.setState({ animationClass: newAnimation });
//     };

//     render() {
//         {
//             console.log(this.props, 'sssssssss');
//         }
//         return (
//             <ThemeContext.Provider value={this.state.theme}>
//                 <SwitchTransition mode="out-in">
//                     <CSSTransition
//                        exit={true}
//                        timeout={1000}
//                        unmountOnExit
//                        key={this.props.location.pathname}
//                        classNames="slide"
//                     >
//                         <Switch location={this.props.location}>
//                             <Route path="/Login" render={(props) =>
//                                 <LoginPage {...props} />
//                             } />

//                             <Route exact path="/" render={(props) =>
//                                 <HomePage {...props} changeAnimation={this.changeAnimation} />
//                             } />
//                             <Route path="/Home" render={(props) =>
//                                 <HomePage {...props} changeAnimation={this.changeAnimation} />
//                             } />
//                             <Route path="/Menu" render={(props) =>
//                                 <MenuPage {...props} changeAnimation={this.changeAnimation} />
//                             } />
//                             <Route path="/Category" render={(props) =>
//                                 <CategoryPage {...props} changeAnimation={this.changeAnimation} />
//                             } />
//                             <Route path="/Article" render={(props) =>
//                                 <ArticlePage {...props} changeAnimation={this.changeAnimation} />
//                             } />
//                             <Route exact path="/Setting" render={(props) =>
//                                 <SettingPage {...props} changeAnimation={this.changeAnimation} />
//                             } />
//                         </Switch>
//                     </CSSTransition>
//                 </SwitchTransition>
//             </ThemeContext.Provider>
//         )
//     }
// }

// export default withRouter(Routers)

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup,
  SwitchTransition,
} from "react-transition-group";
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
import MenuPage from "../Pages/Menu/MenuPage";
import CategoryPage from "../Pages/Category/CategoryPage";
import "animate.css";
import ArticlePage from "../Pages/Article/ArticlePage";
import SettingPage from "../Pages/Setting/SettingPage";
import { AnimatePresence, motion } from "framer-motion";
import SettingRouters from "../Pages/Setting/SettingRouters";
import { login } from "../Api/Api";

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

  componentDidMount = async () => {
    await login();
  };

  changeTheme = (value) => {
    this.setState({
      theme: themeMap[value],
    });
  };

  changeAnimation = () => {};

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Route
          render={({ location }) => (
            <AnimatePresence mode="wait">
              <Switch location={location} key={location.pathname}>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <motion.div
                      initial={{ opacity: 0 }} // 开始状态，完全透明并且在当前视图的右边100px的位置
                      animate={{ opacity: 1 }} // 结束状态，完全不透明并且位于当前视图原点
                      exit={{ opacity: 0 }} // 退出状态，完全透明并且在当前视图的左边100px的位置
                      transition={{ duration: 0.5 }} // 动画过渡时间
                    >
                      <HomePage
                        {...props}
                        changeAnimation={this.changeAnimation}
                      />
                    </motion.div>
                  )}
                />
                <Route
                  exact
                  path="/Home"
                  render={(props) => (
                    // <motion.div
                    //     initial={{ opacity: 0 }} // 开始状态，完全透明并且在当前视图的右边100px的位置
                    //     animate={{ opacity: 1 }}   // 结束状态，完全不透明并且位于当前视图原点
                    //     exit={{ opacity: 0 }}   // 退出状态，完全透明并且在当前视图的左边100px的位置
                    //     transition={{ duration: 0.5 }} // 动画过渡时间
                    // >
                    <div>
                      <HomePage
                        {...props}
                        changeAnimation={this.changeAnimation}
                      />
                      {/* <MenuPage
                        {...props}
                        changeAnimation={this.changeAnimation}
                      /> */}
                    </div>

                    // </motion.div>
                  )}
                />
                {/* <Route
                                    exact
                                    path="/Menu"
                                    render={(props) => (
                                        <motion.div
                                            initial={{ opacity: 0 }} // 开始状态，完全透明并且在当前视图的右边100px的位置
                                            animate={{ opacity: 1 }}   // 结束状态，完全不透明并且位于当前视图原点
                                            exit={{ opacity: 0 }}   // 退出状态，完全透明并且在当前视图的左边100px的位置
                                            transition={{ duration: 0.5 }} // 动画过渡时间
                                        >
                                            <MenuPage {...props} changeAnimation={this.changeAnimation} />
                                        </motion.div>
                                    )}
                                /> */}
                <Route
                  exact
                  path="/Category"
                  render={(props) => (
                    <motion.div
                      initial={{ opacity: 0 }} // 开始状态，完全透明并且在当前视图的右边100px的位置
                      animate={{ opacity: 1 }} // 结束状态，完全不透明并且位于当前视图原点
                      exit={{ opacity: 0 }} // 退出状态，完全透明并且在当前视图的左边100px的位置
                      transition={{ duration: 0.5 }} // 动画过渡时间
                    >
                      <CategoryPage
                        {...props}
                        changeAnimation={this.changeAnimation}
                      />
                    </motion.div>
                  )}
                />
                {/* <Route
                  exact
                  path="/Article"
                  render={(props) => (
                    <motion.div
                      initial={{ opacity: 0 }} // 开始状态，完全透明并且在当前视图的右边100px的位置
                      animate={{ opacity: 1 }} // 结束状态，完全不透明并且位于当前视图原点
                      exit={{ opacity: 0 }} // 退出状态，完全透明并且在当前视图的左边100px的位置
                      transition={{ duration: 0.5 }} // 动画过渡时间
                    >
                      <ArticlePage
                        {...props}
                        changeAnimation={this.changeAnimation}
                      />
                    </motion.div>
                  )}
                /> */}
                <Route
                  path="/Setting"
                  render={(props) => (
                    <motion.div>
                      <SettingPage
                        {...props}
                        changeAnimation={this.changeAnimation}
                      />
                    </motion.div>
                  )}
                />
              </Switch>
            </AnimatePresence>
          )}
        />
      </ThemeContext.Provider>
    );
  }
}

export default withRouter(Routers);
