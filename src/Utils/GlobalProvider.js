import React from "react";
import { getCategories, getTags } from "../CodeTwo/Api/Api";

const GlobalContext = React.createContext();

class GlobalProvider extends React.Component {
  state = {
    MarkList: JSON.parse(localStorage.getItem("MarkList")) || null,
    CategoryList: JSON.parse(localStorage.getItem("CategoryList")) || null,
  };

  componentDidMount = async () => {
    let tags = await getTags();
    let mark = {};
    tags.res.forEach((tag) => {
      mark[tag.Id] = { value: tag.Value, color: tag.Color };
    });

    let categories = await getCategories();
    let category = categories.res;
    // let category = {};
    // categories.res.forEach((item) => {
    //   category[item.Id] = { Title: item.Title, Icon: item.Icon };
    // });

    this.setState({
      MarkList: mark,
      CategoryList: category,
    });
    localStorage.setItem("MarkList", JSON.stringify(mark));
    localStorage.setItem("CategoryList", JSON.stringify(category));
  };

  setMarkList = (MarkList,CategoryList) => {
    localStorage.setItem("MarkList", JSON.stringify(MarkList));
    localStorage.setItem("CategoryList", JSON.stringify(CategoryList));
    this.setState({
      MarkList,
      CategoryList,
    });
  };

  render() {
    return (
      <GlobalContext.Provider
        value={{
          state: this.state,
          setMarkList: this.setMarkList,
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export { GlobalProvider, GlobalContext };
