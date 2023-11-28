import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./ActionSpace.scss";
import { Space } from "antd";
import { getMessageAsync, postMessage } from "../../../../Api/Api";
import { useDispatch } from "react-redux";

const ActionSpace = () => {
  const dispatch = useDispatch();
  const [messageContent, setMessageContent] = useState("");

  const history = useHistory();
  const GoHome = () => {
    history.push("/Home");
  };

  const AddMessage = () => {
    console.log(messageContent, "messageContentmessageContent");
    let params = {
      Content: messageContent,
      FontFamily: "beautiful",
      Color: "#fff",
    };
    postMessage(params);
    dispatch(getMessageAsync());
  };

  return (
    <div className="ActionSpace">
      <Space size={10} direction="vertical">
        <Space style={{ width: "100%" }} direction="horizontal" size={10}>
          <input
            className="CartoonRectangleInput"
            placeholder="请输入弹幕留言"
            onChange={(e) => setMessageContent(e.target.value)}
            value={messageContent}
          ></input>
          <div className="CartoonCircleButton" onClick={AddMessage}>
            新增
          </div>
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
