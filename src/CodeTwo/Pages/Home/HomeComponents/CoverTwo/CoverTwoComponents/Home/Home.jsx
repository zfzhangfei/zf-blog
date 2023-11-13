import React from "react";
import "./Home.scss";
import ShowArticleList from "./HomeComponents/ShowArticleList/ShowArticleList";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import ShowArticleContent from "./HomeComponents/ShowArticleContent/ShowArticleContent";

const Home = () => {
  return (
    <div className="Home">
      <div className="HomeBox1"></div>
      <div className="HomeBox2">
        <div className="HomeBox4"></div>
        <div className="HomeBox5">
          {/* <ShowArticleList></ShowArticleList> */}
          <Router>
            <Switch>
              <Route
                exact
                path="/Home"
                render={(props) => (
                  <div>
                    <ShowArticleList></ShowArticleList>
                  </div>
                )}
              />
              <Route
                path="/Article/:id"
                render={(props) => <ShowArticleContent articleMap={props} />}
              />
            </Switch>
          </Router>
        </div>
      </div>
      <div className="HomeBox3"></div>
    </div>
  );
};

export default Home;
