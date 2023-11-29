import React, { useEffect, useState } from "react";
import "./Wall.scss";
import { useDispatch, useSelector } from "react-redux";
import { getMessageAsync } from "../../../../Api/Api";
import { motion } from "framer-motion";
import { Space } from "antd";
import Barrage from "./Barrage";

const Wall = () => {
  const dispatch = useDispatch();
  const messageList = useSelector((state) => state.messageList); // 确保这里的路径与你的状态树匹配

  useEffect(() => {
    dispatch(getMessageAsync());
  }, [dispatch]);

  return (
    <div className="Wall">
      <img
        className="Image"
        src="/CodeTwo/Wall/111.Webp"
        style={{ width: 300, height: 300 }}
        alt="Background"
      />
      <div className="MessageScreen">
        {messageList &&
          messageList.map((item, index) => {
           return <Barrage item={item} key={index}></Barrage>;
          })}
      </div>
    </div>
  );
};

export default Wall;
