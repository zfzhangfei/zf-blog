import React from 'react';
import { getCurrentUser } from '../Code/Api/Api';

const GlobalContext = React.createContext();

class GlobalProvider extends React.Component {
  state = {
    userName: '111',
    userEmail: '',
    CurrentUser:null,
  }

  componentDidMount = async () => {
    this.setState({
      CurrentUser: await getCurrentUser(),
    })
}

  setUser = (userName, userEmail,CurrentUser) => {
    this.setState({
      userName,
      userEmail,
      CurrentUser,
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