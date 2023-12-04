import React from "react";
import "./ShowDesignExampleList.scss";
import { Button } from "antd";

const ShowDesignExampleList = ({ goShowVideo }) => {
  return (
    <div className="ShowDesignExampleList" style={{textAlign:'center'}}>
      <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F19%2F20200319172536_NtBTh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704266148&t=0ba67f74501d07f6460a5a94d5f68dd0"
        alt=""
        style={{ width: "100%", height: "500px", objectFit: "cover" }}
      />
      <Button
        onClick={() => {
          goShowVideo({
            url: `/ShowDesignExample`,
            state: {
              type:"Artwork"
            },
          });
        }}
      >
        进入作品集
      </Button>
    </div>
  );
};

export default ShowDesignExampleList;
