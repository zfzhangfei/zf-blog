import React from "react";
import "./SideBorder.scss";
import { Space, Tag } from "antd";
import { HomeFilled, SettingFilled } from "@ant-design/icons";
import { GlobalContext } from "../../../../../../../../../Utils/GlobalProvider";

const SideBorder = ({ props, filterChooseTag }) => {
  const goMyGarden = () => {
    props.history.push("/Garden");
  };

  const goSetting = () => {
    props.history.push("/Setting");
  };

  const chooseTag = (key, value) => {
    filterChooseTag(key)
    props.history.push("/Home");
    // props.history.push(`/Home/${'#'+value}`);
  }
  return (
    <GlobalContext.Consumer>
      {context => (
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
            <div className="SideBorderBox3">
              {Object.keys(context.state.MarkList).map((key) => {
                return (
                  <Tag color={context.state.MarkList[key].color} onClick={() => chooseTag(key, context.state.MarkList[key].value)}>{context.state.MarkList[key].value}</Tag>
                );
              })}
            </div>
          </Space>
        </div>
      )}
    </GlobalContext.Consumer>
  );
};

export default SideBorder;
