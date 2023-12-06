import React from "react";
import "./ShowPhotoList.scss";
import { Link } from "react-router-dom";
import { Card, Space } from "antd";
const { Meta } = Card;

const items = [
  {
    Cover:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
    Name: "2023年12月6日",
    Description:'晴天-郊游',
    Children: [
      {
        Url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
        Name: "仿写个人主页",
      },
      {
        Url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
        Name: "仿写个人主页",
      },
    ],
    Text: "123333333333333",
  },
  {
    Cover:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
    Name: "2023年12月6日",
    Description:'晴天-郊游',
    Children: [
      {
        Url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
        Name: "仿写个人主页",
      },
      {
        Url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
        Name: "仿写个人主页",
      },
    ],
    Text: "123333333333333",
  },
  {
    Cover:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
    Name: "2023年12月6日",
    Description:'晴天-郊游',
    Children: [
      {
        Url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
        Name: "仿写个人主页",
      },
      {
        Url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
        Name: "仿写个人主页",
      },
    ],
    Text: "123333333333333",
  },
  {
    Cover:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
    Name: "2023年12月6日",
    Description:'晴天-郊游',
    Children: [
      {
        Url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
        Name: "仿写个人主页",
      },
      {
        Url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
        Name: "仿写个人主页",
      },
    ],
    Text: "123333333333333",
  },
  {
    Cover:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
    Name: "2023年12月6日",
    Description:'晴天-郊游',
    Children: [
      {
        Url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
        Name: "仿写个人主页",
      },
      {
        Url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
        Name: "仿写个人主页",
      },
    ],
    Text: "123333333333333",
  },
];

const ShowPhotoList = () => {
  return (
    <div className="ShowPhotoList">
      <Space size={20} wrap="true">
        {items &&
          items.map((item, index) => {
            return (
              <Link
                to={{
                  pathname: `/Home/ShowPhoto/${item.Name}`,
                  state: item,
                }}
                key={index}
              >
                <Card
                  style={{
                    width: 230,
                    border: "none",
                    borderRadius: 0,
                    background: "#fff",
                    padding: 10,
                    display: "inline-block",
                  }}
                  cover={
                    <img
                      alt="example"
                      src={item.Cover}
                      style={{ width: "100%", height: 250, objectFit: "cover" }}
                    />
                  }
                  actions={[]}
                >
                  <Meta
                    title={item.Name}
                    description={item.Description}
                  />
                </Card>
              </Link>
            );
          })}
      </Space>
    </div>
  );
};

export default ShowPhotoList;
