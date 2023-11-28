import React, { useEffect, useState } from "react";
import "./MessageWall.scss";
import { Space } from "antd";
import ActionSpace from "./MessageWallComponents/ActionSpace/ActionSpace";
import Wall from "./MessageWallComponents/Wall/Wall";

const MessageWall = () => {


  return (
    <div className="MessageWall">
      <div className="MessageWallBox">
        <div id="Wall">
          <Wall></Wall>
        </div>
        <div id="ActionSpace">
          <ActionSpace></ActionSpace>
        </div>
      </div>
    </div>
  );
};

export default MessageWall;
