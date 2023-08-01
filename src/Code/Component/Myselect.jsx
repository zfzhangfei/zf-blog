import React, { Component } from 'react'
import { lightTheme, darkTheme, getNavyBlueWhite, getDarkPurpleLightPurple, getPeachPinkCocoa } from '../../Plugin/theme';
import { Select } from 'antd';

export default class Myselect extends Component {

    changeTheme = (value) => {
        this.props.changeTheme(value);
      }

  render() {
    return (
      <div>
          <Select
          showSearch
          placeholder="Select a person"
          onChange={(value) => { this.changeTheme(value) }}
          options={[
            {
              value: 'lightTheme',
              label: 'lightTheme',
            },
            {
              value: 'darkTheme',
              label: 'darkTheme',
            },
            {
              value: 'getNavyBlueWhite',
              label: 'getNavyBlueWhite',
            },
          ]}
        />
      </div>
    )
  }
}
