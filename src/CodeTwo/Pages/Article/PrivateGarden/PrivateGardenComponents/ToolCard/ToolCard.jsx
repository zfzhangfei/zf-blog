import React from "react";
import "./ToolCard.scss";

const ToolCard = () => {
  return (
    <div className="ToolCard">
      <img
        src="https://img0.baidu.com/it/u=3790699013,619352165&fm=253&fmt=auto&app=138&f=JPEG?w=888&h=500"
        alt=""
        width={50}
        height={30}
        style={{ objectFit: "cover" ,margin:10}}
      />
    </div>
  );
};

export default ToolCard;
