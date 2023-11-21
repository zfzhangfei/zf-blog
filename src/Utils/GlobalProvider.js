import React from "react";
import {  getTags } from "../CodeTwo/Api/Api";

const GlobalContext = React.createContext();

class GlobalProvider extends React.Component {
  state = {
    MarkList: JSON.parse(localStorage.getItem("MarkList")) || null,
  };

  componentDidMount = async () => {
 
    let tags = await getTags();
    let mark = {};
    tags.res.forEach((tag) => {
      mark[tag.Id] = { value: tag.Value, color: tag.Color };
    });

   

    this.setState({
      MarkList: mark,
    });
    localStorage.setItem("MarkList", JSON.stringify(mark));


  };


  setUser = (MarkList, UserList) => {
    localStorage.setItem("MarkList", JSON.stringify(MarkList));
    this.setState({
      MarkList,
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
