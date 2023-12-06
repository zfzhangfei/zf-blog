import React from "react";
import "./ShowDesignExampleList.scss";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

const items = [
  {
    Cover:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
    Name: "仿写个人主页",
    key: 1,
  },
  {
    Cover:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
    Name: "仿写个人主页",
    key: 1,
  },
  {
    Cover:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
    Name: "仿写个人主页",
    key: 1,
  },
  {
    Cover:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
    Name: "仿写个人主页",
    key: 1,
  },
  {
    Cover:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
    Name: "仿写个人主页",
    key: 1,
  },
  {
    Cover:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
    Name: "仿写个人主页",
    key: 1,
  },
  {
    Cover:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
    Name: "仿写个人主页",
    key: 1,
  },
  {
    Cover:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
    Name: "仿写个人主页",
    key: 1,
  },
];

const ShowDesignExampleList = () => {
  return (
    <div className="ShowDesignExampleList" style={{ textAlign: "center" }}>
      {items &&
        items.map((item, index) => {
          return (
            <Link
              to={{
                pathname: `/ShowWebWorks/${item.key}`,
              }}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <Card
                style={{
                  width: 230,
                  border: "none",
                  background: "rgba(51, 51, 51, 0.5)",
                  display: "inline-block",
                  margin: 10,
                }}
                cover={
                  <img
                    alt="example"
                    src={item.Cover}
                    style={{ width: 230, height: 250, objectFit: "cover" }}
                  />
                }
                actions={[]}
              >
                <Meta title={item.Name} description="This is the description" />
              </Card>
            </Link>
          );
        })}
    </div>
  );
};

export default ShowDesignExampleList;
