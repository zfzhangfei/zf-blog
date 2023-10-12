import React, { Component } from 'react'
import { ThemeContext } from '../../../Utils/Theme/themeContext'
import Introduction from '../Composition/Home/Introduction';
import LifeBox from '../Composition/Home/LifeBox';
import { login } from '../../Api/Api'
import ShowArtical from '../Composition/Home/ShowArtical/ShowArtical';
import ArticalList from '../Composition/Home/ArticalList';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import '../Css/Homepage.css'
import Directory from '../Composition/Home/Directory/Directory';


let screenWidth = window.screen.width;
let screenHeight = window.screen.height;
export default class Homepage extends Component {
    static contextType = ThemeContext;
    state = {
        directList: null
    }

    componentDidMount = async () => {
        login()

    }
    ShowArticalById = (value) => {
        this.props.history.push('/Home/article/' + value)
    }

    updateArticleInfo = (info) => {
        this.setState({
            directList: info
        })
    }

    render() {
        const { pathname } = this.props.location;
        const theme = this.context;
        return (
            <div id='Main' style={{ background: theme.bgColor, color: theme.textColor }}>
                <div className='Wallpaper' style={{ position: 'relative', backgroundImage: 'url("https://zfblog.su.bcebos.com/zfblogpicture/src%3Dhttp___c-ssl.duitang.com_uploads_item_202006_28_20200628135652_wxcsi.thumb.1000_0.jpg%26refer%3Dhttp___c-ssl.duitang.png")', height: '80vh' }}>

                </div>
                <div id='content'>
                    <div id='Homepage'>
                        <div id='Left'>
                            <div style={{ width: '100%' }}>
                                <Introduction theme={theme}></Introduction>
                            </div >
                            <div style={{ width: '100%' }}>
                                <LifeBox theme={theme}></LifeBox>
                            </div>
                        </div>
                        <div id='Center'>
                            <div>
                                {pathname.indexOf("/Home") != -1 ? (
                                    <Router>
                                        <Switch>
                                            <Route path="/Home/article/:Id" render={(props) => <ShowArtical {...props} directList={this.state.directList} onUpdate={this.updateArticleInfo} />} />
                                        </Switch>
                                    </Router>
                                ) : (
                                    <ArticalList ShowArticalById={this.ShowArticalById} />
                                )}
                            </div>
                        </div>
                        <div id='Right'>
                            {pathname.indexOf("/Home/article") != -1 && <Directory directList={this.state.directList} ></Directory>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}