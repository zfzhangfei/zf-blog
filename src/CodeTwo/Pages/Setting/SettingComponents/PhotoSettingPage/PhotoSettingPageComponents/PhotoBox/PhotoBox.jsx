import React from "react";
import "./PhotoBox.scss";
import { ArrowLeftOutlined ,ArrowRightOutlined} from "@ant-design/icons";
import { Space ,Image} from "antd";
import { useRef ,useEffect} from "react";

const PhotoBox = ({item}) => {
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
    <div className="PhotoBox">
      <div className="Name" style={{ width: "100px" }}>
        {item.Name}
      </div>
      <div className="Box">
        <div className="ArrowLeft" onClick={() => scroll("left")}>
          <ArrowLeftOutlined />
        </div>
        <div className="Photo" ref={scrollContainerRef}>
          <Space direction="horizontal" size={10}>
            {item &&
              item.Children.length > 0 &&
              item.Children.map((photo, index) => (
                <Image
                  src={photo.Url}
                  key={index}
                  style={{ width: 100, height: 100 }}
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
