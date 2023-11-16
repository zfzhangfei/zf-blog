import React, { Component } from "react";
import { Avatar, Button, Popover, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import EmojiPicker from "./SubmitCommentComponents/EmojiPicker";
import { GlobalContext } from "../../../../../../../../../../Utils/GlobalProvider";
import { useState } from "react";
import { postComment } from "../../../../../../../../../Api/Api";

const SubmitComment = ({ ArticleId, replyComment }) => {
  const [commentContent, setCommentContent] = useState("");

  const emojiSelect = (value) => {
    setCommentContent(commentContent + value.native);
  };

  const PostComment = async (CurrentUser) => {
    const params = {
      ParentCommentId: 0,
      ParentsName: CurrentUser.username,
      Content: commentContent,
      IsLeaf: false,
      IsLike: false,
      Avatar: CurrentUser.avatar,
      ArticleId: ArticleId.ArticleId,
    };
    await postComment(params)
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
            src={<img src={context.state.CurrentUser.avatar} alt="avatar" />}
          />

          <div style={{ flex: 1 }}>
            <div style={{ width: "100%", height: 200, overflow: "auto" }}>
              <TextArea
                style={{ width: "100%", resize: "none", minHeight: 200 }}
                placeholder={
                  replyComment
                    ? "回复" +
                      context.state.UserList[replyComment.CreateBy].username +
                      ":"
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
                    PostComment(context.state.CurrentUser);
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
