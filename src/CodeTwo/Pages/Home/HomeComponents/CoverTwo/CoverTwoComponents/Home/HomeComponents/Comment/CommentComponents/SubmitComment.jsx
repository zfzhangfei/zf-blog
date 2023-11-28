import React, { Component } from "react";
import { Avatar, Button, Popover, Space, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import EmojiPicker from "./SubmitCommentComponents/EmojiPicker";
import { GlobalContext } from "../../../../../../../../../../Utils/GlobalProvider";
import { useState } from "react";
import {
  getCommentByArticleIdAsync,
  getUsers,
  postComment,
} from "../../../../../../../../../Api/Api";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SubmitComment = ({ ArticleId, replyComment, type, IsReply }) => {
  const [commentContent, setCommentContent] = useState("");
  const [CurrentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("CurrentUser"))
  );
  const [userList, setUserList] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      let users = await getUsers();
      let userList = {};
      users.res.forEach((user) => {
        userList[user.id] = { username: user.username, avatar: user.avatar };
      });
      setUserList(userList);
    };

    fetchUsers();
  }, []);

  const emojiSelect = (value) => {
    setCommentContent(commentContent + value.native);
  };

  const PostComment = async (value) => {
    if (sessionStorage.getItem("token")) {
      let params = null;
      let param = null;
      if (type == "comment") {
        params = {
          ParentCommentId: 0,
          ParentId: 0,
          Content: commentContent,
          IsLeaf: false,
          IsLike: false,
          Avatar: CurrentUser.avatar,
          ArticleId: ArticleId.ArticleId,
        };
        setCommentContent("");
        param = {
          ArticleId: ArticleId.ArticleId,
        };
      }
      if (type == "reply") {
        params = {
          ParentCommentId: replyComment.Id,
          ParentId: replyComment.CreateBy,
          Content: commentContent,
          IsLeaf: true,
          IsLike: false,
          Avatar: CurrentUser.avatar,
          ArticleId: ArticleId,
        };
        IsReply(replyComment);
        param = {
          ArticleId: ArticleId,
        };
      }
      await postComment(params);
      dispatch(getCommentByArticleIdAsync(param));
    } else {
      message.error("请先登录！");
      IsReply(replyComment);
    }
  };

  return (
    <GlobalContext.Consumer>
      {(context) => (
        <div
          className="SubmitComment"
          style={{ display: "flex", alignItems: "top" }}
        >
          <Avatar
            style={{ marginRight: 20 }}
            size={60}
            src={
              <img
                src={
                  CurrentUser && CurrentUser.avatar
                    ? CurrentUser.avatar
                    : "https://img1.baidu.com/it/u=225041176,855892897&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1422"
                }
                alt="avatar"
                style={{ objectFit: "cover" }}
              />
            }
          />
          <div style={{ flex: 1 }}>
            <div style={{ width: "100%", height: 200, overflow: "auto" }}>
              <TextArea
                style={{ width: "100%", resize: "none", minHeight: 200 }}
                placeholder={
                  userList && replyComment
                    ? "回复" + userList[replyComment.CreateBy]?.username + ":"
                    : "快来说点什么吧！"
                }
                value={commentContent}
                onChange={(e) => {
                  setCommentContent(e.target.value);
                }}
              />
            </div>

            <div style={{ width: "100%", height: 40, position: "relative" }}>
              <Space size={10} direction="horizontal">
                <Popover
                  content={
                    <div>
                      <EmojiPicker emojiSelect={emojiSelect}></EmojiPicker>
                    </div>
                  }
                  title="Title"
                  trigger="hover"
                >
                  <div
                    style={{
                      display: "inline-block",
                      verticalAlign: "middle",
                      height: 40,
                      width: 40,
                    }}
                  >
                    <img
                      src="/CodeTwo/Comment/表情包.png"
                      alt="表情包"
                      style={{ height: 30, width: 30, margin: 5 }}
                    />
                  </div>
                </Popover>
              </Space>
              <div
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  height: 40,
                  width: 40,
                  position: "absolute",
                  right: 70,
                  top: 0,
                }}
              >
                <Button
                  type="primary"
                  style={{ margin: 5 }}
                  onClick={() => {
                    PostComment(CurrentUser);
                  }}
                >
                  发表评论
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </GlobalContext.Consumer>
  );
};

export default SubmitComment;
