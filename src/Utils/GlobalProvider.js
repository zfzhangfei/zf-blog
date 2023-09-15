import React from 'react';
import { getCurrentUser, getMark } from '../Code/Api/Api';

const GlobalContext = React.createContext();

class GlobalProvider extends React.Component {
  state = {
    CurrentUser: JSON.parse(localStorage.getItem('CurrentUser')) || null,
    MarkList: JSON.parse(localStorage.getItem('MarkList')) || null,
  }

  componentDidMount = async () => {
    let userData = await getCurrentUser();
    let user = {
      username:userData.username,
      avatar:userData.avatar
    }
    let tags = await getMark();
    let mark = {};
    tags.forEach(tag => {
      mark[tag.Id] = {value:tag.Value,color:tag.Color};
    })





    this.setState({
      CurrentUser: user,
      MarkList: mark
    });
    localStorage.setItem('CurrentUser', JSON.stringify(user));
    localStorage.setItem('MarkList', JSON.stringify(mark));
  }

  setUser = (MarkList, CurrentUser) => {
    localStorage.setItem('CurrentUser', JSON.stringify(CurrentUser));
    localStorage.setItem('MarkList', JSON.stringify(MarkList));
    this.setState({
      CurrentUser,
      MarkList,
    });
  }

  render() {
    return (
      <GlobalContext.Provider
        value={{
          state: this.state,
          setUser: this.setUser,
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export { GlobalProvider, GlobalContext };