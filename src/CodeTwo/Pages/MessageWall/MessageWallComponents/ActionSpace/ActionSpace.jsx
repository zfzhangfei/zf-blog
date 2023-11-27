import React from "react";
import { useHistory } from "react-router-dom";
import './ActionSpace.scss'
import { Space } from "antd";

const ActionSpace = () => {
  const history = useHistory();
  const GoHome = () => {
    history.push("/Home");
  };
  return (
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
  );
};

export default ActionSpace;
