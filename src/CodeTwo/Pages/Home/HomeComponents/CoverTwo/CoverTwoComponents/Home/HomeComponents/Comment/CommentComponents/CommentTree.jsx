import React, { useState } from "react";
import { useEffect } from "react";
import { getCommentByArticleId } from "../../../../../../../../../Api/Api";
import CommentBox from "./CommentTreeComponents/CommentBox";
import { Space } from "antd";

const CommentTree = ({ ArticleId, handleReply }) => {
  const [comments, setComments] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const params = {
        ...ArticleId,
      };
      const result = await getCommentByArticleId(params);
      setComments(result.res);
    };
    fetchData();
  }, []);





  return (
    <div
      style={{
        width: "1000px",
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <Space direction="vertical" size={10}>
        {comments?.map((item) => {
          if (item.IsLeaf == 0) {
            return (
              <div style={{ width: "900px" }}>
                <CommentBox
                  commentInfo={item}
                  handleReply={handleReply}
                ></CommentBox>
              </div>
            );
          } else {
            return (
              <div style={{ width: "830px", marginLeft: "70px" }}>
                <CommentBox
                  commentInfo={item}
                  handleReply={handleReply}
                ></CommentBox>
              </div>
            );
          }
        })}
      </Space>
    </div>
  );
};

export default CommentTree;
