import React, { Component } from 'react'
import { ThemeContext } from '../../../Plugin/Theme/themeContext';
import '../Css/Historyspage.css'
import Timeline from '../Composition/Historys/Timeline/Timeline';


const items = [
  { 
    id: 1,
    date: '2020-03-01',
    title: '标题1',
    content: '内容1'
  },
  {
    id: 2,
    date: '2020-04-01', 
    title: '标题2',
    content: '内容2' 
  }
];
export default class Historyspage extends Component {
    static contextType = ThemeContext;

  render() {
    const theme = this.context;
    return (
        <div id='Main' style={{ background: theme.bgColor, color: theme.textColor, width: '100vw' }}>
            <div id='Historyspage'>
             <Timeline items={items}></Timeline>
            </div>
        </div>
    )
  }
}
