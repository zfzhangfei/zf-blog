import React, { useState, useEffect } from "react";
import { getArticle } from "../../../../../../../../Api/Api";
import "./ShowArticleList.scss";
import { HeartFilled, LikeFilled, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const ShowArticleList = ({ props, chooseTag }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getArticle();
      setData(result.res);
    };

    fetchData();
  }, []);


  return (
    <div className="ShowArticleList">
      {data?.map((item, index) => {
        if (!item.isRelease) return
        if (chooseTag && !item.tags?.includes(chooseTag)) return
        return (
          <div className="ArticleListBox1">
            <Link
              to={{
                pathname: `/Home/Article/${item.Id}`,
                state: { article: item },
              }}
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <img src="/CodeTwo/Homepage/NANA1.webp" alt="" />
              <div className="ArticleListBox2">
                <div className="title">{item.name}</div>
                <div>{item.summary}</div>
              </div>
            </Link>
            <div className="icon">
              <div>
                <UserOutlined />
                {item.author}
              </div>
              <div style={{ display: "flex", gap: 20 }}>
                <HeartFilled />
                <LikeFilled />
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default ShowArticleList;
