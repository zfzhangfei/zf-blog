import React from "react";
import "./VideoList.scss";
import { Card } from "antd";
const { Meta } = Card;

const items = [
  {
    Cover:
      "https://zfblog.su.bcebos.com/zfblogpicture/%E5%A4%B4%E5%83%8F111.webp",
    Name: "111",
  },
  {
    Cover:
      "https://zfblog.su.bcebos.com/zfblogpicture/%E5%A4%B4%E5%83%8F111.webp",
    Name: "111",
  },
  {
    Cover:
      "https://zfblog.su.bcebos.com/zfblogpicture/%E5%A4%B4%E5%83%8F111.webp",
    Name: "111",
  },
  {
    Cover:
      "https://zfblog.su.bcebos.com/zfblogpicture/%E5%85%83%E6%B0%94%E6%BB%A1%E6%BB%A1.webp",
    Name: "111",
  },
  {
    Cover:
      "https://zfblog.su.bcebos.com/zfblogpicture/%E5%A4%B4%E5%83%8F111.webp",
    Name: "111",
  },
  {
    Cover:
      "https://zfblog.su.bcebos.com/zfblogpicture/%E5%A4%B4%E5%83%8F111.webp",
    Name: "111",
  },
  {
    Cover:
      "https://zfblog.su.bcebos.com/zfblogpicture/%E5%85%83%E6%B0%94%E6%BB%A1%E6%BB%A1.webp",
    Name: "111",
  },
];
const VideoList = () => {
  return (
    <div className="VideoList">
      {items &&
        items.map((item, index) => {
          return (
            <Card
              style={{
                width: 230,
                border: "none",
                background: "rgba(51, 51, 51, 0.5)",
                display: "inline-block",
                margin: 10,
              }}
              cover={<img alt="example" src={item.Cover} style={{width:230,height:250,objectFit:'cover'}}/>}
              actions={[]}
            >
              <Meta title={item.Name} description="This is the description" />
            </Card>
          );
        })}
    </div>
  );
};

export default VideoList;
