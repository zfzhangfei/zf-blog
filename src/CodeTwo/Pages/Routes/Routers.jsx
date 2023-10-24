// import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { lightTheme, darkTheme, getNavyBlueWhite, getDarkPurpleLightPurple, getPeachPinkCocoa } from '../../../Utils/Theme/theme';
// import { ThemeContext } from '../../../Utils/Theme/themeContext'
// import LoginPage from "../Login/LoginPage";
// import HomePage from "../Home/HomePage";




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
//                             {/* <header style={{ height: 50 }}>header</header> */}
//                             <div id="Main">
//                                 <Route exact path="/" render={(props) => <HomePage {...props} />} />
//                                 <Route path="/Home" component={HomePage} />
//                                 <Route path="/Login" component={LoginPage} />
//                             </div>
//                             {/* <footer style={{ height: 50 }}>footer</footer> */}
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
import { lightTheme, darkTheme, getNavyBlueWhite, getDarkPurpleLightPurple, getPeachPinkCocoa } from '../../../Utils/Theme/theme';
import { ThemeContext } from '../../../Utils/Theme/themeContext'
import LoginPage from "../Login/LoginPage";
import HomePage from "../Home/HomePage";
import './Router.scss'
import MenuPage from "../Menu/MenuPage";



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
        animationClass: "fade"
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
                                    timeout={450}
                                    classNames={this.state.animationClass}
                                >
                                    <HomePage {...props} changeAnimation={this.changeAnimation} />
                                </CSSTransition>
                            </TransitionGroup>
                        } />
                        <Route path="/Home" render={(props) =>
                            <TransitionGroup>
                                <CSSTransition
                                    key={props.location.pathname}
                                    timeout={450}
                                    classNames={this.state.animationClass}
                                >
                                    <HomePage {...props} changeAnimation={this.changeAnimation} />
                                </CSSTransition>
                            </TransitionGroup>
                        } />
                        <Route path="/Menu" render={(props) =>
                            <TransitionGroup>
                                <CSSTransition
                                    key={props.location.pathname}
                                    timeout={450}
                                    classNames={this.state.animationClass}
                                >
                                    <MenuPage {...props} changeAnimation={this.changeAnimation} />
                                </CSSTransition>
                            </TransitionGroup>
                        } />
                    </Switch>
                </Router>
            </ThemeContext.Provider>
        )
    }
}
