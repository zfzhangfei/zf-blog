import React from "react";
import "./ShowVideoList.scss";
import VideoFilter from "./ShowVideoListComponents/VideoFilter/VideoFilter";
import VideoList from "./ShowVideoListComponents/VideoList/VideoList";

const ShowVideoList = () => {
  const src =
    "https://img0.baidu.com/it/u=306686722,3113766110&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800";
  return (
    <div className="ShowVideoList">
      <div id="VideoFilter">
        <VideoFilter></VideoFilter>
      </div>
      <div id="AdvertisingSpace">
        {src && (
          <img
            src={src}
            alt="广告位"
            style={{
              width: "100%",
              height: 200,
              marginTop: 10,
              marginBottom: 10,
              objectFit: "cover",
            }}
          />
        )}
      </div>
      <div id="VideoList">
        <VideoList ></VideoList>
      </div>
    </div>
  );
};

export default ShowVideoList;
