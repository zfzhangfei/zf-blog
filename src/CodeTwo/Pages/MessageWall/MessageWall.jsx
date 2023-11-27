import React, { useState } from "react";
import "./MessageWall.scss";
import { Space } from "antd";
import { useHistory } from "react-router-dom";

const MessageWall = () => {
  const history = useHistory();
  const GoHome = () => {
    history.push("/Home");
  };
  return (
    <div className="MessageWall">
      <Space
        size={32}
        direction="vertical"
        style={{ marginTop: 32, marginLeft: "10vw" }}
      >
        <div className="Wall"></div>
        <div className="ActionSpace">
          <Space size={10} direction="vertical">
            <Space style={{ width: "100%" }} direction="horizontal" size={10}>
              <input
                className="CartoonRectangleInput"
                placeholder="请输入弹幕留言"
              ></input>
              <div className="CartoonCircleButton">新增</div>
            </Space>
            <Space style={{ width: "100%" }} direction="horizontal" size={10}>
              <div className="CartoonRectangleButton" onClick={GoHome}>
                Go Home
              </div>
            </Space>
          </Space>
        </div>
      </Space>
    </div>
  );
};

export default MessageWall;
