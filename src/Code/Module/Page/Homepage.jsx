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
        console.log(info, 'infoinfo');
        this.setState({
            directList: info
        })
    }

    render() {
        const { pathname } = this.props.location;
        const theme = this.context;
        return (
            <div id='Main' style={{ background: theme.bgColor, color: theme.textColor, width: '100vw' }}>
                {/* <div className='Wallpaper'>
                    <img src="https://zfblog.su.bcebos.com/zfblogpicture/%E8%83%8C%E6%99%AF.jpg" alt="" width={'100%'} height={300}/>
                </div> */}
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
                        {pathname.indexOf("/Home/article") != -1  && <Directory directList={this.state.directList} ></Directory>}
                    </div>
                </div>
            </div>
        )
    }
}