import React from "react";
import "./CommentBox.scss";
import { GlobalContext } from "../../../../../../../../../../../Utils/GlobalProvider";
import { Space } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import SubmitComment from "../SubmitComment";
import { getUsers, getUsersAsync } from "../../../../../../../../../../Api/Api";
import { connect, useDispatch, useSelector } from "react-redux";
import formatDate from "../../../../../../../../../../CommonFuc/Time";

const CommentBox = ({ commentInfo, handleReply }) => {
  const [commentTime, setCommentTime] = useState();
  const [info, setInfo] = useState();
  const dispatch = useDispatch();
  const userList = useSelector(state => state.userList); // 确保这里的路径与你的状态树匹配

  useEffect(() => {
    var createTime = new Date(commentInfo.CreateTime);
    setCommentTime(formatDate(createTime));
    setInfo(commentInfo);
  }, []);

  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  const Reply = () => {
    handleReply(info);
  };

  return (
    <GlobalContext.Consumer>
      {(context) => (
        <div className="CommentBox">
          <div className="CommentBox2">
            <img
              src={userList && userList[commentInfo.CreateBy]?.avatar}
              alt=""
              style={{
                width: commentInfo.IsLeaf == 0 ? 50 : 35,
                height: commentInfo.IsLeaf == 0 ? 50 : 35,
                objectFit: "cover",
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
                  {commentInfo.ParentId == 0
                    ? userList && userList[commentInfo.CreateBy]?.username
                    : userList &&
                      userList[commentInfo.CreateBy]?.username +
                        "-回复-" +
                        userList &&
                      userList[commentInfo.ParentId]?.username}
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
          <div
            className="CommentBox3"
            style={{ display: commentInfo.IsReply ? "block" : "none" }}
          >
            <SubmitComment
              ArticleId={commentInfo.ArticleId}
              type={"reply"}
              replyComment={commentInfo}
              IsReply={Reply}
            ></SubmitComment>
          </div>
        </div>
      )}
    </GlobalContext.Consumer>
  );
};

export default CommentBox;
