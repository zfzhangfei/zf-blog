import React, { Component } from "react";
import "./LoginPage.scss";
import LoginForm from "./LoginComponents/LoginForm";

export default class LoginPage extends Component {
  render() {
    return (
      <div id="LoginPage">
        <div className="LoginBox">
          <LoginForm props={this.props}></LoginForm>
        </div>
      </div>
    );
  }
}
