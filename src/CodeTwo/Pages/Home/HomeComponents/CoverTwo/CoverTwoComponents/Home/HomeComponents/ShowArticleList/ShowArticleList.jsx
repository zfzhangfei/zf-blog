import React, { useState, useEffect } from "react";
import { getArticle } from "../../../../../../../../Api/Api";
import "./ShowArticleList.scss";
import { HeartFilled, LikeFilled, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../../../../../../../Utils/GlobalProvider";
import { Tag } from "antd";

const ShowArticleList = ({ props }) => {
  const [data, setData] = useState();
  const [tag, setTag] = useState(props.history.location.state?.key);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getArticle();
      setData(result.res);
    };

    fetchData();
    setTag(tag);
  }, []);

  useEffect(() => {
    setTag(tag);
  }, [tag]);

  return (
    <GlobalContext.Consumer>
      {(context) => (
        <div className="ShowArticleList">
          {data?.map((item, index) => {
            if (!item.isRelease) return;
            if (tag && !item.tags?.includes(tag)) return;
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
                <div className="tags">
                  {item.tags &&
                    item.tags.split("/").map((item, index) => {
                      return (
                        <Tag color={context.state.MarkList[item].color}>
                          {context.state.MarkList[item].value}
                        </Tag>
                      );
                    })}
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      )}
    </GlobalContext.Consumer>
  );
};

export default ShowArticleList;
