import React, { Component } from 'react'
import { ThemeContext } from '../../../Plugin/themeContext'
import Introduction from '../Composition/Home/Introduction';
import { Login} from '../Functions/HomepageFuc'
import '../Css/Homepage.css'
import '../Module.css'

export default class Homepage extends Component {
    static contextType = ThemeContext;

    componentDidMount = async () => {
         Login()
    }

    render() {
        const theme = this.context;
        return (
            <div id='Main' style={{ background: theme.bgColor, color: theme.textColor, width: '100vw' }}>
                <div id='Homepage'>
                    <div style={{ width: '100%', marginTop: '20px' }}>
                        <Introduction theme={theme}></Introduction>
                    </div>
                </div>
            </div>
        )
    }
}
