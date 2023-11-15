import React, { Component, useEffect } from "react";
import { GlobalContext } from "../../../../../../../../../Utils/GlobalProvider";
import SubmitComment from "./CommentComponents/SubmitComment";
import CommentTree from "./CommentComponents/CommentTree";
import { useState } from "react";

const Comment = (ArticleId) => {
  const [replyComment, setReplyComment] = useState();



  const handleReply = (value) => {
    setReplyComment(value);
  };

  useEffect(() => {
    console.log(replyComment);
  }, [replyComment]);

  return (
    <GlobalContext.Consumer>
      {(context) => (
        <div className="Comment">
          <div>
            <SubmitComment
              ArticleId={ArticleId}
              replyComment={replyComment}
            ></SubmitComment>
          </div>
          <div className="CommentTree"></div>
          <CommentTree ArticleId={ArticleId} handleReply={handleReply}></CommentTree>
        </div>
      )}
    </GlobalContext.Consumer>
  );
};

export default Comment;
