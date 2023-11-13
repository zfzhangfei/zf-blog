import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ShowArticleContent = ({ articleMap }) => {
//   let { Id } = useParams();
//   let article = articleMap[Id];
  console.log('====================================');
  console.log(articleMap);
  console.log('====================================');

  return (
    <div className="ShowArticleContent">
      {/* {console.log(articleMap)}
      <h2>{article.name}</h2>
      <p>{article.content}</p> */}
    </div>
  );
};

export default ShowArticleContent;
