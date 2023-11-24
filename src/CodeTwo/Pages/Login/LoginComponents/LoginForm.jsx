import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { login } from "../../../Api/Api";

const LoginForm = ({ props }) => {
  const onFinish = (values) => {
    let params = {
      username: values.username,
      password: values.password,
    };
    login(params);
    props.history.push("/");
  };
  const onFinishFailed = (errorInfo) => {
  };
  return (
    <Form
      name="basic"
 
      wrapperCol={{
        span: 24,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder="请输入用户名" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password placeholder="请输入密码" />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;
