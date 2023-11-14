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
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const Home = ({ props }) => {
  const scrollTop = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };
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
                exact
                path="/Home"
                render={(props) => (
                  <div>
                    <ShowArticleList></ShowArticleList>
                  </div>
                )}
              />
              <Route
                path="/Home/Article/:id"
                render={(props) => <ShowArticleContent props={props} />}
              />
            </Switch>
          </Router>

          <motion.div style={{ position: "absolute" }}>
            <FloatButton
              onClick={scrollTop}
              icon={<VerticalAlignTopOutlined />}
              visibilityHeight="110vh"
            />
          </motion.div>
        </div>
      </div>
      <div className="HomeBox3"></div>
    </div>
  );
};

export default Home;
