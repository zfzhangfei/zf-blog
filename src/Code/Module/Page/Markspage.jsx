import React, { Component } from 'react'
import { ThemeContext } from '../../../Plugin/Theme/themeContext';
import '../Css/Markspage.css'
import { getMark } from '../Api/Api';


export default class Markspage extends Component {
    static contextType = ThemeContext;

    componentDidMount=async()=>{
      console.log(await getMark(),'getMark()getMark()getMark()');
    }

  render() {
    const theme = this.context;
    return (
        <div id='Main' style={{ background: theme.bgColor, color: theme.textColor, width: '100vw' }}>
            <div id='Markspage'>
                111
            </div>
        </div>
    )
  }
}
