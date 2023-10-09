import React, { Component } from 'react'
import { ThemeContext } from '../../../Utils/Theme/themeContext';
import '../Css/Markspage.css'


export default class Markspage extends Component {
  static contextType = ThemeContext;

  componentDidMount = async () => {
  }

  render() {
    const theme = this.context;
    return (
      <div id='Main' style={{ background: theme.bgColor, color: theme.textColor}}>
        <div id='content'>
          <div id='Markspage'>
            111121222222222222222222222222222
          </div>
        </div>
      </div>
    )
  }
}
