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
import SideBorder from "./HomeComponents/SideBorder/SideBorder";
import { FloatButton } from "antd";

const Home = ({ props }) => {
  return (
    <div className="Home">
      <div className="HomeBox1"></div>
      <div className="HomeBox2">
        <div className="HomeBox4">
          <SideBorder props={props}></SideBorder>
        </div>
        <div className="HomeBox5">
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <div>
                    <ShowArticleList></ShowArticleList>
                  </div>
                )}
              />
              <Route
                path="/Home"
                render={(props) => (
                  <div>
                    <ShowArticleList></ShowArticleList>
                  </div>
                )}
              />
              <Route
                path="/Article/:id"
                render={(props) => <ShowArticleContent props={props} />}
              />
            </Switch>
          </Router>
          <div style={{ position: 'absolute' }}>
            <FloatButton.BackTop />
          </div>
        </div>
      </div>
      <div className="HomeBox3"></div>
    </div>
  );
};

export default Home;
