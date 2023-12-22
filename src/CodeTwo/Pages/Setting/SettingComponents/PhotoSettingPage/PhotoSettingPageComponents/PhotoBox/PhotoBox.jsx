import React from "react";
import "./PhotoBox.scss";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Space, Image, Card } from "antd";
import { useRef, useEffect } from "react";
import AddPhotoModal from "../../PhotoSettingPageComponents/AddPhotoModal/AddPhotoModal";
import { useSelector } from "react-redux";
import { useState } from "react";
import { getAlbumPictureAsync } from "../../../../../../Api/Api";
import { useDispatch } from "react-redux";
import Meta from "antd/es/card/Meta";

const PhotoBox = ({ item }) => {
  const scrollContainerRef = useRef(null);
  const dispatch = useDispatch();
  const photoList = useSelector((state) => state.photoList); // 确保这里的路径与你的状态树匹配
  const [photoListById, setPhotoListById] = useState([]);

  useEffect(() => {
    dispatch(getAlbumPictureAsync());
    if (scrollContainerRef.current) {
    }
  }, []);

  useEffect(() => {
    const filteredPhotos = photoList.filter((x) => x.PhotoId === item.Id);
    setPhotoListById(filteredPhotos);
  }, [photoList]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount =
        direction === "left" ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="PhotoBox">
      <div className="Name"  style={{ width: "100px", backgroundImage: `url(${item.Cover})` }}>
        <span style={{color:'#fff'}}>{item.Name}</span>
        <AddPhotoModal item={item}></AddPhotoModal>
        {/* { item.Cover&&<Image src={item.Cover} style={{width:50,height:50}}></Image>} */}
      </div>
      <div className="Box">
        <div className="ArrowLeft" onClick={() => scroll("left")}>
          <ArrowLeftOutlined />
        </div>
        <div className="Photo" ref={scrollContainerRef}>
          <Space direction="horizontal" size={10}>
            {photoListById.length > 0 &&
              photoListById.map((photo, index) => (
                <Image
                  src={photo.BosPath}
                  key={index}
                  style={{ width: 100, height: 100, objectFit: "cover" }}
                />
              ))}
          </Space>
        </div>
        <div className="ArrowRight" onClick={() => scroll("right")}>
          <ArrowRightOutlined />
        </div>
      </div>
    </div>
  );
};

export default PhotoBox;
