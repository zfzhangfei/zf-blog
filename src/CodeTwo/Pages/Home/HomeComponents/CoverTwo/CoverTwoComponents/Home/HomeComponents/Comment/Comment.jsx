import React, { Component, useEffect } from "react";
import { GlobalContext } from "../../../../../../../../../Utils/GlobalProvider";
import SubmitComment from "./CommentComponents/SubmitComment";
import CommentTree from "./CommentComponents/CommentTree";
import { useState } from "react";

const Comment = (ArticleId) => {

 

  return (
    <GlobalContext.Consumer>
      {(context) => (
        <div className="Comment">
          <div>
            <SubmitComment
              ArticleId={ArticleId}
              type={'comment'}
            ></SubmitComment>
          </div>
          <div className="CommentTree"></div>
          <CommentTree ArticleId={ArticleId}></CommentTree>
        </div>
      )}
    </GlobalContext.Consumer>
  );
};

export default Comment;
