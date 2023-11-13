import React from "react";
import { useState } from "react";
import MarkDown from "../../../../../../../../../Plugin/VditorEditor/markDown";


const ShowArticleContent = ({ props }) => {
  const [article, setArticle] = useState(props.location.state.article);
  //   let { Id } = useParams();
  //   let article = articleMap[Id];
  console.log("====================================");
  console.log(props);
  console.log("====================================");

  return (
    <div className="ShowArticleContent" >
      <h2>{article.name}</h2>
      <MarkDown html={article.content}></MarkDown>
    </div>
  );
};

export default ShowArticleContent;
