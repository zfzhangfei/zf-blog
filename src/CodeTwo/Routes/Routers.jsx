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










import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { lightTheme, darkTheme, getNavyBlueWhite, getDarkPurpleLightPurple, getPeachPinkCocoa } from '../../Utils/Theme/theme';
import { ThemeContext } from '../../Utils/Theme/themeContext'
import LoginPage from "../Pages/Login/LoginPage";
import HomePage from "../Pages/Home/HomePage";
import './Router.scss'
import MenuPage from "../Pages/Menu/MenuPage";
import CategoryPage from "../Pages/Category/CategoryPage";
import 'animate.css';
import ArticlePage from "../Pages/Article/ArticlePage";
import SettingPage from "../Pages/Setting/SettingPage";



const themeMap = {
    'lightTheme': lightTheme,
    'darkTheme': darkTheme,
    'getNavyBlueWhite': getNavyBlueWhite,
    'getDarkPurpleLightPurple': getDarkPurpleLightPurple,
    'getPeachPinkCocoa': getPeachPinkCocoa
}


export default class Routers extends Component {

    state = {
        theme: lightTheme,
        animationClass: "animate__bounceInDown"
    }

    changeTheme = (value) => {
        this.setState({
            theme: themeMap[value],
        })
    }

    changeAnimation = (newAnimation) => {
        this.setState({ animationClass: newAnimation });
    };

    render() {

        return (
            <ThemeContext.Provider value={this.state.theme}>
                <Router>
                    <Switch>
                        <Route path="/Login" render={(props) =>
                            <LoginPage {...props} />
                        } />





                        <Route exact path="/" render={(props) =>
                            <TransitionGroup>
                                <CSSTransition
                                    key={props.location.pathname}
                                    timeout={1000}
                                    exit={true}
                                    classNames="animate__animated animate__fadeIn animate__fadeOut"
                                >
                                    <HomePage {...props} changeAnimation={this.changeAnimation} />
                                </CSSTransition>
                            </TransitionGroup>
                        } />
                        <Route path="/Home" render={(props) =>
                            <TransitionGroup>

                                <CSSTransition
                                    key={props.location.pathname}
                                    timeout={1000}
                                    exit={true}
                                    classNames="animate__animated animate__fadeIn animate__fadeOut"
                                >
                                    <HomePage {...props} changeAnimation={this.changeAnimation} />
                                </CSSTransition>
                            </TransitionGroup>
                        } />
                        <Route path="/Menu" render={(props) =>
                            <TransitionGroup>
                                <CSSTransition
                                    key={props.location.pathname}
                                    timeout={1000}
                                    exit={true}
                                    classNames="animate__animated animate__fadeIn animate__fadeOut"
                                >
                                    <MenuPage {...props} changeAnimation={this.changeAnimation} />
                                </CSSTransition>
                            </TransitionGroup>
                        } />
                        <Route path="/Category" render={(props) =>
                            <TransitionGroup>
                                <CSSTransition
                                    key={props.location.pathname}
                                    timeout={1000}
                                    exit={true}
                                    classNames="animate__animated animate__fadeIn animate__fadeOut"
                                >
                                    <CategoryPage {...props} changeAnimation={this.changeAnimation} />
                                </CSSTransition>
                            </TransitionGroup>
                        } />
                        <Route path="/Article" render={(props) =>
                            <TransitionGroup>
                                <CSSTransition
                                    key={props.location.pathname}
                                    timeout={1000}
                                    exit={true}
                                    classNames="animate__animated animate__fadeIn animate__fadeOut"
                                >
                                    <ArticlePage {...props} changeAnimation={this.changeAnimation} />
                                </CSSTransition>
                            </TransitionGroup>
                        } />
                        <Route path="/Setting" render={(props) =>
                            <TransitionGroup>
                                <CSSTransition
                                    key={props.location.pathname}
                                    timeout={1000}
                                    exit={true}
                                    classNames="animate__animated animate__fadeIn animate__fadeOut"
                                >
                                    <SettingPage {...props} changeAnimation={this.changeAnimation} />
                                </CSSTransition>
                            </TransitionGroup>
                        } />


                    </Switch>

                </Router>
            </ThemeContext.Provider>
        )
    }
}

