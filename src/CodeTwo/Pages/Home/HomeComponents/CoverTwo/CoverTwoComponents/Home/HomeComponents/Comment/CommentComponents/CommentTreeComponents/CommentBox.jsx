import React from "react";
import "./CommentBox.scss";
import { GlobalContext } from "../../../../../../../../../../../Utils/GlobalProvider";
import { Space } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import SubmitComment from "../SubmitComment";

const CommentBox = ({ commentInfo, handleReply}) => {
  const [commentTime, setCommentTime] = useState();
  const [info, setInfo] = useState();

  useEffect(() => {
    const formatDate = (d) => {
      var year = d.getFullYear();
      var month = ("0" + (d.getMonth() + 1)).slice(-2);
      var day = ("0" + d.getDate()).slice(-2);
      var hours = ("0" + d.getHours()).slice(-2);
      var minutes = ("0" + d.getMinutes()).slice(-2);
      var seconds = ("0" + d.getSeconds()).slice(-2);

      return (
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
      );
    };
    var createTime = new Date(commentInfo.CreateTime);
    setCommentTime(formatDate(createTime));
    setInfo(commentInfo);
  }, []);

  const Reply = () => {
    handleReply(info);
  };


  return (
    <GlobalContext.Consumer>
      {(context) => (
        <div className="CommentBox">
          <div className="CommentBox2">
            <img
              src={context.state.UserList[commentInfo.UserId]?.avatar}
              alt=""
              style={{
                width: commentInfo.IsLeaf == 0 ? 50 : 35,
                height: commentInfo.IsLeaf == 0 ? 50 : 35,
              }}
            />
            <div className="CommentBox1">
              <Space direction="vertical" style={{ width: "100%" }}>
                <div
                  style={{
                    width: "100%",
                    color: "#FCF3CF",
                    fontWeight: "bold",
                  }}
                >
                  {context.state.UserList[commentInfo.ParentId]?.username}
                </div>
                <div style={{ width: "100%" }}>{commentInfo.Content}</div>
                <Space direction="horizontal" size={30}>
                  <div
                    style={{ width: "100%", color: "#FCF3CF", fontSize: 14 }}
                  >
                    {commentTime}
                  </div>
                  <div
                    style={{ width: "100%", color: "#FCF3CF", fontSize: 14 }}
                    onClick={Reply}
                  >
                    回复
                  </div>
                </Space>
              </Space>
            </div>
          </div>
        </div>
      )}
    </GlobalContext.Consumer>
  );
};

export default CommentBox;
