import React, { useState } from "react";
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
import { motion } from "framer-motion";
import AuthRoute from "../../../../../../Routes/authRoute";
import ShowVideoList from "./HomeComponents/ShowVideoList/ShowVideoList";
import ShowPhotoList from "./HomeComponents/ShowPhotoList/ShowPhotoList";
import SiderBorderRouters from "../../../../../../Routes/SiderBorderRouters";

const Home = ({ props, changePage }) => {
  return (
    <div className="Home">
      <div className="HomeBox1"></div>
      <div className="HomeBox2">
        <div className="HomeBox4">
          <SideBorder props={props} changePage={changePage}></SideBorder>
        </div>
        <div className="HomeBox5">
          <SiderBorderRouters></SiderBorderRouters>
          <div style={{ position: "absolute" }}>
            <FloatButton.BackTop />
          </div>
        </div>
      </div>
      <div className="HomeBox3"></div>
    </div>
  );
};

export default Home;
