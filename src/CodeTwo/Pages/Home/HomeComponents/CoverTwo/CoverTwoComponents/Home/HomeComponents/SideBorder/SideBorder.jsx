import React from "react";
import "./SideBorder.scss";
import { Space } from "antd";
import { HomeFilled, SettingFilled } from "@ant-design/icons";

const SideBorder = ({ props }) => {
  const goMyGarden = () => {
    props.history.push("/Garden");
  };

  const goSetting = () => {
    props.history.push("/Setting");
  };
  return (
    <div className="SideBorder">
      <Space direction="vertical" size={20}>
        <div className="SideBorderBox1">
          <Space direction="horizontal" size={20}>
            <HomeFilled
              onClick={() => {
                goMyGarden();
              }}
            />
            <SettingFilled
              onClick={() => {
                goSetting();
              }}
            />
          </Space>
        </div>
        <div className="SideBorderBox2">
          <div
            style={{ fontSize: "24px", fontWeight: "bold", padding: "10px" }}
          >
            Garden
          </div>
          <img
            src="/CodeTwo/Homepage/NANA2.webp"
            alt=""
            style={{ objectFit: "cover" }}
          />
        </div>
      </Space>
    </div>
  );
};

export default SideBorder;
