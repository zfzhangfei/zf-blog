import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./ActionSpace.scss";
import { Input, Space } from "antd";
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
    console.log(
      sessionStorage.getItem("CurrenUser"),
      "messageContentmessageContent"
    );
    let currenUser = JSON.parse(sessionStorage.getItem("CurrentUser"));
    let params = {
      Content: messageContent,
      Avatar: currenUser.avatar,
      FontFamily: "beautiful",
      Color: "#fff",
    };
    postMessage(params);
    setMessageContent("");
    dispatch(getMessageAsync());
  };

  return (
    <div className="ActionSpace">
      <Space size={10} direction="vertical">
        <Space style={{ width: "100%" }} direction="horizontal" size={10}>
          <Input
            showCount
            maxLength={100}
            className="CartoonRectangleInput"
            placeholder="请输入弹幕留言"
            onChange={(e) => setMessageContent(e.target.value)}
            value={messageContent}
          ></Input>
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
