import React, { Component } from 'react'
import { ThemeContext } from '../../../Plugin/Theme/themeContext'
import Introduction from '../Composition/Home/Introduction';
import LifeBox from '../Composition/Home/LifeBox';
import { Login } from '../Api/Api'
import ShowArtical from '../Composition/Home/ShowArtical';
import ArticalList from '../Composition/Home/ArticalList';
import '../Css/Homepage.css'

export default class Homepage extends Component {
    static contextType = ThemeContext;

    componentDidMount = async () => {
        Login()
    }

    render() {
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
                        {/* <ShowArtical></ShowArtical> */}
                        <ArticalList></ArticalList>
                    </div>
                    <div id='Right'>

                    </div>
                </div>
            </div>
        )
    }
}
