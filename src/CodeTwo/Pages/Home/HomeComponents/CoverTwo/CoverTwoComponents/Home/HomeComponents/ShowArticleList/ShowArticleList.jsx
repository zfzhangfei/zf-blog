import React, { useState, useEffect } from "react";
import { getArticle } from "../../../../../../../../Api/Api";
import "./ShowArticleList.scss";
import { HeartFilled, LikeFilled, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const ShowArticleList = () => {
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
        return (
          <div className="ArticleListBox1">
            <Link
              to={{
                pathname: `/Article/${item.Id}`,
                state: { article: item },
              }}
            >
              <img src="/CodeTwo/Homepage/NANA1.webp" alt="" />
              <div className="ArticleListBox2">
                <div className="title">{item.name}</div>
                <div>{item.summary}</div>
                <div className="icon">
                  <div>
                    <UserOutlined />
                  </div>
                  <div style={{ display: "flex", gap: 20 }}>
                    <HeartFilled />
                    <LikeFilled />
                  </div>
                </div>
              </div>
              <hr />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ShowArticleList;
