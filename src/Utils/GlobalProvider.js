import React from "react";
import { getCurrentUser, getTags, getUsers } from "../CodeTwo/Api/Api";

const GlobalContext = React.createContext();

class GlobalProvider extends React.Component {
  state = {
    CurrentUser: JSON.parse(localStorage.getItem("CurrentUser")) || null,
    MarkList: JSON.parse(localStorage.getItem("MarkList")) || null,
    UserList: JSON.parse(localStorage.getItem("UserList"))||null,
  };

  componentDidMount = async () => {
    let userData = await getCurrentUser();
    let user = {
      username: userData.username,
      avatar: userData.avatar,
    };
    let tags = await getTags();
    let mark = {};
    tags.res.forEach((tag) => {
      mark[tag.Id] = { value: tag.Value, color: tag.Color };
    });

    let users = await getUsers();
    let userList = {};
    users.res.forEach((user) => {
      userList[user.id] = { username: user.username, avatar: user.avatar };
    });

    this.setState({
      CurrentUser: user,
      MarkList: mark,
      UserList: userList,
    });
    localStorage.setItem("CurrentUser", JSON.stringify(user));
    localStorage.setItem("MarkList", JSON.stringify(mark));
    localStorage.setItem("UserList", JSON.stringify(userList));
  };

  setUser = (MarkList, CurrentUser,UserList) => {
    localStorage.setItem("CurrentUser", JSON.stringify(CurrentUser));
    localStorage.setItem("MarkList", JSON.stringify(MarkList));
    localStorage.setItem("UserList", JSON.stringify(UserList));
    this.setState({
      CurrentUser,
      MarkList,
      UserList,
    });
  };

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





