import React, { Component } from "react";
import "./LoginPage.scss";
import LoginForm from "./LoginComponents/LoginForm";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Space } from "antd";

export default class LoginPage extends Component {
  goHome = () => {
    this.props.history.push('/Home')
  };
  render() {
    return (
      <div id="LoginPage">
        <div className="layer1"></div>
        <div className="layer2"></div>
        <div className="layer3"></div>
        <div className="LoginBox">
          <LoginForm props={this.props}></LoginForm>
          <div className="LoginBoxBottom">
            <Space direction="horizontal" onClick={this.goHome}>
              <ArrowLeftOutlined />
              <div>GoHome</div>
            </Space>
          </div>
        </div>
      </div>
    );
  }
}
