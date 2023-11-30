import React, { useEffect } from "react";
import "./ShowVideo.scss";

const ShowVideo = (props) => {
  useEffect(() => {
    console.log(props.location.state);
  }, []);

  return (
    <div className="ShowVideo">
      <div className="ShowVideoBox1"></div>
      <div className="ShowVideoBox2">
        <div className="VideoBox">
          <video controls>
            <source
              src="https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D"
              type="video/mp4"
            />
            你的浏览器不支持Video标签
          </video>
        </div>
        <div className="InfoBox"></div>
      </div>
      <div className="ShowVideoBox3"></div>
    </div>
  );
};

export default ShowVideo;
