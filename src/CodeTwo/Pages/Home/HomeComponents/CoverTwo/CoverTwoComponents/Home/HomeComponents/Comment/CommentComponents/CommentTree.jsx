import React, { useState } from "react";
import { useEffect } from "react";
import { getCommentByArticleId } from "../../../../../../../../../Api/Api";
import CommentBox from "./CommentTreeComponents/CommentBox";
import { Space } from "antd";

const nestComments = (comments, ParentCommentId = 0, seenIds = new Set()) => {
  const commentTree = [];
  comments?.forEach((comment) => {
    if (comment.ParentCommentId === ParentCommentId) {
      // 如果我们之前已经看到过这个`id`，意味着有一个循环。
      if (seenIds.has(comment.Id)) {
        console.warn(`检测到循环！评论id${comment.Id}被多次引用。`);
        return;
      }
      seenIds.add(comment.id);

      // 递归查找子评论
      const children = nestComments(comments, comment.Id, new Set(seenIds)); // 传递`seenIds`集合的副本
      if (children.length) {
        comment.children = children;
      }
      commentTree.push(comment);
    }
  });
  return commentTree;
};

const CommentTree = ({ ArticleId, handleReply }) => {
  const [comments, setComments] = useState();
  const [commentsTreeData, setCommentsTreeData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const params = {
        ...ArticleId,
      };
      const result = await getCommentByArticleId(params);
      const updatedComments = result.res.map((comment) => {
        return {
          ...comment,
          IsReply: false,
        };
      });
      setComments(updatedComments);
      const commentsWithIsReply = nestComments(updatedComments);
      setCommentsTreeData(commentsWithIsReply);
    };
    fetchData();
  }, []);


  const upDataCommentData = (value) => {
    const updatedComments = comments?.map((comment) => {
      if (value.Id === comment.Id) {
        return {
          ...comment,
          IsReply: !comment.IsReply,
        };
      } else {
        return {
          ...comment,
          IsReply: false,
        };
      }
    });
    setComments(updatedComments);
    const commentsWithIsReply = nestComments(updatedComments);
    setCommentsTreeData(commentsWithIsReply);
    handleReply(value);
  };

  const renderComments = (comments, depth = 0) => {
    return comments?.map((comment) => {
      return (
        <div>
          <div
            key={comment.id}
            style={{
              width: comment.IsLeaf == false ? "900px" : "830px",
              marginLeft: comment.IsLeaf == false ? "0px" : "70px",
            }}>
            <CommentBox commentInfo={comment} handleReply={upDataCommentData} />
          </div>
          {comment.children && renderComments(comment.children, depth + 1)}
        </div>
      );
    });
  };

  return (
    <div
      style={{
        width: "1000px",
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
      }}>
      <Space direction="vertical" size={10}>
        {/* {comments?.map((item) => {
          if (item.IsLeaf == 0) {
            return (
              <div style={{ width: "900px" }}>
                <CommentBox
                  commentInfo={item}
                  handleReply={upDataCommentData}></CommentBox>
              </div>
            );
          } else {
            return (
              <div style={{ width: "830px", marginLeft: "70px" }}>
                <CommentBox
                  commentInfo={item}
                  handleReply={upDataCommentData}></CommentBox>
              </div>
            );
          }
        })} */}
        {renderComments(commentsTreeData)}
      </Space>
    </div>
  );
};

export default CommentTree;
