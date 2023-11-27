import React, { useState } from "react";
import "./MessageWall.scss";
import { Space } from "antd";
import ActionSpace from "./MessageWallComponents/ActionSpace/ActionSpace";
import Wall from "./MessageWallComponents/Wall/Wall";

const MessageWall = () => {
  return (
    <div className="MessageWall">
      <Space
        size={32}
        direction="vertical"
        style={{ marginTop: 32, marginLeft: "10vw" }}
      >
        <div id="Wall">
          <Wall></Wall>
        </div>
        <div id="ActionSpace">
          <ActionSpace></ActionSpace>
        </div>
      </Space>
    </div>
  );
};

export default MessageWall;
