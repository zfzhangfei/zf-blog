import React, { Component } from 'react'
import { ThemeContext } from '../../../Utils/Theme/themeContext';
import '../Css/Historyspage.css'
import Timeline from '../Composition/Historys/Timeline/Timeline';


const items = [
  {
    id: 1,
    date: '2023-08-04',
    title: '标题1',
    content: '网站实现写文章功能',
    color: 'green',
  },
  {
    id: 2,
    date: '2020-04-01',
    title: '标题2',
    content: '内容2',
    color: 'gold',
  }
];
export default class Historyspage extends Component {
  static contextType = ThemeContext;

  render() {
    const theme = this.context;
    return (
      <div id='Main' style={{ background: theme.bgColor, color: theme.textColor, width: '100vw' }}>
        <div id='content'>
          <div id='Historyspage'>
            <Timeline items={items}></Timeline>
          </div>
        </div>
      </div>
    )
  }
}
