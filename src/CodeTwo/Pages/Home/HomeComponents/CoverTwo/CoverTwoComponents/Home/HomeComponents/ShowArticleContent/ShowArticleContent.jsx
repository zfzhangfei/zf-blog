import React from "react";
import { useState } from "react";
import MarkDown from "../../../../../../../../../Plugin/VditorEditor/markDown";
import "./ShowArticleContent.scss";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Comment from "../Comment/Comment";
import { useEffect } from "react";

const ShowArticleContent = ({ props }) => {
  const [article, setArticle] = useState(props.location.state?.article);

  const goHome = () => {
    props.history.push("/Home");
  };

  return (
    <div className="ShowArticleContent">
      <div>
        <ArrowLeftOutlined onClick={goHome} />
        {article && (
          <div>
            <h2 style={{ textAlign: "center" }}>{article.name}</h2>
            <MarkDown html={article.content}></MarkDown>
            <Comment ArticleId={article.Id}></Comment>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowArticleContent;
