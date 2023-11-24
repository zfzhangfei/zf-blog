import React from "react";
import "./SideBorder.scss";
import { Space, Tag } from "antd";
import {
  CaretUpOutlined,
  HomeFilled,
  LoginOutlined,
  SettingFilled,
} from "@ant-design/icons";
import { GlobalContext } from "../../../../../../../../../Utils/GlobalProvider";
import { Link } from "react-router-dom";

const SideBorder = ({ props, changePage }) => {
  const goMyGarden = () => {
    props.history.push("/Garden");
  };

  const goSetting = () => {
    props.history.push("/Setting");
  };

  const goLogin = () => {
    props.history.push("/Login");
  };

  return (
    <GlobalContext.Consumer>
      {(context) => (
        <div className="SideBorder">
          <Space direction="vertical" size={20}>
            <div className="SideBorderBox1">
              <Space direction="horizontal" size={20}>
                <CaretUpOutlined
                  style={{ fontSize: 30 }}
                  onClick={() => {
                    changePage();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                />
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
                <LoginOutlined
                  onClick={() => {
                    goLogin();
                  }}
                />
              </Space>
            </div>
            <div className="SideBorderBox2">
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  padding: "10px",
                }}
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
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                标签#
              </div>
              {context.state.MarkList &&
                Object.keys(context.state.MarkList).map((key) => {
                  return (
                    <Link
                      to={{
                        pathname: `/Home/Tag/${context.state.MarkList[key].value}`,
                        state: { key: key, isShowApplicationPage: false },
                      }}
                      key={key}
                    >
                      <Tag
                        color={context.state.MarkList[key].color}
                        style={{ margin: 5 }}
                      >
                        {context.state.MarkList[key].value}
                      </Tag>
                    </Link>
                  );
                })}
            </div>

            <div className="SideBorderBox4">
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                分类
              </div>
            </div>
          </Space>
        </div>
      )}
    </GlobalContext.Consumer>
  );
};

export default SideBorder;
