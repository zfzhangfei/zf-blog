import React from "react";
import { useState } from "react";
import MarkDown from "../../../../../../../../../Plugin/VditorEditor/markDown";
import './ShowArticleContent.scss'
import { ArrowLeftOutlined } from "@ant-design/icons";

const ShowArticleContent = ({ props }) => {
  const [article, setArticle] = useState(props.location.state.article);

  const goHome=()=>{
    props.history.push('/Home')
  }

  return (
    <div className="ShowArticleContent" >
      <ArrowLeftOutlined onClick={goHome}/>
      <h2 style={{ textAlign: 'center' }}>{article.name}</h2>
      <MarkDown html={article.content}></MarkDown>
    </div>
  );
};

export default ShowArticleContent;
