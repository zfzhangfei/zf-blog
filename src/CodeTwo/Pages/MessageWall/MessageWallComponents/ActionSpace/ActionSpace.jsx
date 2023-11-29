import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./ActionSpace.scss";
import { ColorPicker, Input, Popover, Space } from "antd";
import { getMessageAsync, postMessage } from "../../../../Api/Api";
import { useDispatch } from "react-redux";

const ActionSpace = () => {
  const dispatch = useDispatch();
  const [messageContent, setMessageContent] = useState("");
  const [fontColor, setFontColor] = useState("#fff");

  const history = useHistory();
  const GoHome = () => {
    history.push("/Home");
  };

  const AddMessage = () => {
    let currenUser = JSON.parse(sessionStorage.getItem("CurrentUser"));
    let params = {
      Content: messageContent,
      Avatar: currenUser.avatar,
      FontFamily: "beautiful",
      Color: fontColor,
    };
    postMessage(params);
    setMessageContent("");
    dispatch(getMessageAsync());
  };

  const GetColor = (e, color) => {
    console.log(color);
    setFontColor(color);
  };

  useEffect(() => {}, [fontColor]);

  return (
    <div className="ActionSpace">
      <Space size={10} direction="vertical">
        <Space style={{ width: "100%" }} direction="horizontal" size={10}>
          <Input
            showCount
            maxLength={100}
            size="large"
            className="CartoonRectangleInput"
            placeholder="请输入弹幕留言"
            onChange={(e) => setMessageContent(e.target.value)}
            value={messageContent}
            style={{ resize: "none" }}
            addonAfter={
              <ColorPicker
                size="large"
                onChange={GetColor}
                defaultValue={"#fff"}
              />
            }
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
