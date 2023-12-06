import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
} from "@ant-design/icons";
import React, { useEffect, useRef } from "react";
import { Avatar, Image, List, Space } from "antd";
import "./PhotoList.scss";
import PhotoBox from "../PhotoBox/PhotoBox";

const items = [
  {
    Cover:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
    Name: "2023年12月6日",
    Description: "晴天-郊游",
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
    Description: "晴天-郊游",
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
    Description: "晴天-郊游",
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
    Description: "晴天-郊游",
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
    Description: "晴天-郊游",
    Children: [
      {
        Url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
        Name: "仿写个人主页",
      },
      {
        Url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
        Name: "仿写个人主页",
      },
      {
        Url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
        Name: "仿写个人主页",
      },
      {
        Url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
        Name: "仿写个人主页",
      },
      {
        Url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
        Name: "仿写个人主页",
      },
      {
        Url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
        Name: "仿写个人主页",
      },
      {
        Url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
        Name: "仿写个人主页",
      },
      {
        Url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
        Name: "仿写个人主页",
      },
      {
        Url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
        Name: "仿写个人主页",
      },
      {
        Url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
        Name: "仿写个人主页",
      },
      {
        Url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
        Name: "仿写个人主页",
      },
      {
        Url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0",
        Name: "仿写个人主页",
      },
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

const PhotoList = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      // 当元素已经挂载到DOM上时，可以在这里进行额外操作。
    }
  }, []); // 依赖数组为空，表示仅在组件挂载时执行

  const scroll = (direction) => {
    console.log(direction, scrollContainerRef);
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount =
        direction === "left" ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <List
      className="PhotoList"
      itemLayout="vertical"
      size="large"
      //   pagination={{
      //     onChange: (page) => {
      //       console.log(page);
      //     },
      //     pageSize: 3,
      //   }}
      dataSource={items}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          style={{
            width: "100%",
            height: 150,
          }}
        >
          <PhotoBox item={item}></PhotoBox>
        </List.Item>
      )}
    />
  );
};

export default PhotoList;
