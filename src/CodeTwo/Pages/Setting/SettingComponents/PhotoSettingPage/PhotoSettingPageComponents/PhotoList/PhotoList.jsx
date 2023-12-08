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
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAlbumAsync } from "../../../../../../Api/Api";

const PhotoList = () => {
  const scrollContainerRef = useRef(null);
  const dispatch = useDispatch();
  const albumList = useSelector((state) => state.albumList); // 确保这里的路径与你的状态树匹配

  useEffect(() => {
    if (scrollContainerRef.current) {
      // 当元素已经挂载到DOM上时，可以在这里进行额外操作。
    }

    dispatch(getAlbumAsync());

  }, []); // 依赖数组为空，表示仅在组件挂载时执行


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
      dataSource={albumList}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          style={{
            width: "100%",
            height: 200,
          }}
        >
          <PhotoBox item={item}></PhotoBox>
        </List.Item>
      )}
    />
  );
};

export default PhotoList;
